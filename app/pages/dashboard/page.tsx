import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  const activities = [
    "Activity 1",
    "Activity 2",
    "Activity 3",
    "Activity 4",
    "Activity 5",
  ];
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
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}
