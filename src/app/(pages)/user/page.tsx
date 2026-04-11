import Sidebar from "../../../components/Sidebar";
import { getUserData } from "@/src/services/userService";

export default async function UserPage() {
  const user = await getUserData();
  if (!user) {
    // return <div>Không có quyền truy cập</div>;
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

  return (
    <div className="container">
      <Sidebar />

      <div className="title">
        <h1>
          <b>User</b>
        </h1>
      </div>

      <div className="profile-header">
        <div className="avatar">
          <span>{user.full_name?.[0] || "U"}</span>
        </div>

        <div className="profile">
          <p style={{ fontSize: "30px" }}>
            <b>{user.full_name}</b>
          </p>

          <p>
            <b>Email</b>
          </p>
          <p>{user.email}</p>

          <p>
            <b>Ngày tạo</b>
          </p>
          <p>{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
        <div className="edit-btn">
          <button>
            <span></span> ✎ Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
