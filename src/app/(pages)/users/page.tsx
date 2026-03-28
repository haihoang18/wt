import Sidebar from "../../../components/Sidebar";
export default function UsersPage() {
  return (
    <div className="container">
      <Sidebar />
      <div className="title">
        <h1>
          <b>Users</b>
        </h1>
      </div>
      <div className="profile-header">
        <div className="avatar">
          <span>U</span>
        </div>
        <div className="profile">
          <p style={{ fontSize: "30px" }}>
            <b>Tên người dùng</b>
          </p>
          <p>
            <b>Email</b>
          </p>
          <p>abc@gmail.com</p>
          <p>
            <b>Ngày sinh</b>
          </p>
          <p>dd/mm/yy</p>
          <p>
            <b>Ngày tạo</b>
          </p>
          <p>dd/mm/yy</p>
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
