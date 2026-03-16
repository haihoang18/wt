import { Plus, X } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
export default function ClassesPage() {
  const classes = [
    { id: 1, name: "Lớp 1" },
    { id: 2, name: "Lớp 2" },
    { id: 3, name: "Lớp 3" },
    { id: 4, name: "Lớp 4" },
    { id: 5, name: "Lớp 5" },
  ];
  return (
    <div className="container">
      <Sidebar />

      <div className="title">
        <h1>
          <b>Classes</b>
        </h1>
      </div>
      <div className="edit-btn">
        <button className="add-btn">
          <Plus size={20} strokeWidth={2.5} />
          Thêm lớp
        </button>
        <button className="delete-btn">
          <X size={20} strokeWidth={2.5} />
          Xoá lớp
        </button>
      </div>

      <div className="class-list">
        {classes.map((cls) => (
          <Link key={cls.id} href={`/classes/${cls.id}`} className="class-item">
            {cls.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
