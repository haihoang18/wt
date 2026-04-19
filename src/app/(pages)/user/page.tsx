import { verifyAuth } from "@/src/lib/auth";
import Sidebar from "../../../components/Sidebar";
import { getUserData } from "@/src/services/user.service";

export default async function UserPage() {
  const decoded = await verifyAuth();

  if (!decoded) return <h1>Lỗi xác thực</h1>;
  const user = await getUserData(decoded.uid);
  if (!user) {
    return (
      <div>
        <h1>Lỗi xác thực</h1>
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
