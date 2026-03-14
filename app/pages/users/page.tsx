import Sidebar from "../../components/Sidebar";
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
          <p>User's name</p>
          <p>Email: example@example.com</p>
          <p>Ngày sinh: dd/mm/yy</p>
          <p>Ngày tạo : dd/mm/yy</p>
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
