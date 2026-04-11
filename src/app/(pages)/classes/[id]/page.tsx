import { Plus, X } from "lucide-react";
import Sidebar from "../../../../components/Sidebar";
import { getStudentData } from "@/src/services/studentService";
export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const data = await getStudentData(id);

    const { classname, students = [] } = data;

    return (
      <div className="container">
        <Sidebar />
        <div className="title">
          <h1>
            <b>{classname}</b>
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
          {students.map((student: any) => (
            <div key={student.id} className="student-item">
              {student.last_name} {student.first_name}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching classes:", error);
    return <div>Đã xảy ra lỗi khi kết nối đến cơ sở dữ liệu.</div>;
  }
}
