import { Plus, X } from "lucide-react";
import Sidebar from "../../../../components/Sidebar";
export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const students = [
    { id: 1, name: "Học sinh 1" },
    { id: 2, name: "Học sinh 2" },
    { id: 3, name: "Học sinh 3" },
    { id: 4, name: "Học sinh 4" },
    { id: 5, name: "Học sinh 5" },
  ];

  return (
    <div className="container">
      <Sidebar />
      <div className="title">
        <h1>
          <b>Class-{id}</b>
        </h1>
      </div>
      <div className="edit-btn">
        <button className="add-btn">
          <Plus size={20} strokeWidth={2.5} />
          Thêm học sinh
        </button>
        <button className="delete-btn">
          <X size={20} strokeWidth={2.5} />
          Xoá học sinh
        </button>
      </div>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            {student.name}
          </div>
        ))}
      </div>
    </div>
  );
}
