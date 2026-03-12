import { BookUser, UserRound, School, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import "../pages/dashboard/main.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link href="/pages/dashboard" className="icon" data-tooltip="Dashboard">
        <LayoutDashboard size={40} />
      </Link>
      <Link href="/pages/users" className="icon" data-tooltip="Người dùng">
        <UserRound size={40} />
      </Link>
      <Link
        href="/pages/classes"
        className="icon"
        data-tooltip="Danh sách lớp học"
      >
        <School size={40} />
      </Link>
      <Link
        href="/pages/lessons"
        className="icon"
        data-tooltip="Quản lý bài học"
      >
        <BookUser size={40} />
      </Link>
    </div>
  );
}
