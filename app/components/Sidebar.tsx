"use client";
import {
  BookUser,
  UserRound,
  School,
  LayoutDashboard,
  Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../pages/pages.css";
export default function Sidebar() {
  const pathname = usePathname();
  const menu = [
    {
      href: "/pages/dashboard",
      tooltip: "Dashboard",
      icon: <LayoutDashboard size={40} />,
    },
    {
      href: "/pages/users",
      tooltip: "Người dùng",
      icon: <UserRound size={40} />,
    },
    {
      href: "/pages/classes",
      tooltip: "Danh sách lớp học",
      icon: <School size={40} />,
    },
    {
      href: "/pages/lessons",
      tooltip: "Quản lý bài học",
      icon: <BookUser size={40} />,
    },
  ];
  return (
    <div className="sidebar">
      {menu.map((item, i) => {
        const Icon = item.icon.type;
        return (
          <Link
            key={i}
            href={item.href}
            data-tooltip={item.tooltip}
            className={`icon ${pathname === item.href ? "active" : ""}`}
          >
            <Icon size={40} />
          </Link>
        );
      })}
    </div>
  );
}
