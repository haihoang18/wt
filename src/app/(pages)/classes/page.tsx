import { Plus, X } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import { getClassesData } from "@/src/services/classesService";

export interface ClassType {
  id: string;
  classname: string;
}

export default async function ClassesPage() {
  const classes: ClassType[] = await getClassesData();
  if (!classes) {
    return (
      <div>
        <h1>Lỗi xác thực hoặc không tìm thấy API</h1>
        <p>
          Kiểm tra console của terminal (không phải trình duyệt) để xem lỗi
          fetch.
        </p>
      </div>
    );
  }

  if (classes.length === 0) {
    return <div>Database đang trống hoặc chưa kết nối được!</div>;
  }

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
            {cls.classname}
          </Link>
        ))}
      </div>
    </div>
  );
}
