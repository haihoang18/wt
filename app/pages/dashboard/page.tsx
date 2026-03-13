import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="title">
        <h1>
          <b>Dashboard</b>
        </h1>
      </div>
      <div className="recent-activity">
        <p>Recent Activity</p>
      </div>
      <div className="activity-list">
        <div className="activity-item">Activity 1</div>
        <div className="activity-item">Activity 2</div>
        <div className="activity-item">Activity 3</div>
      </div>
    </div>
  );
}
