import Sidebar from "../../components/Sidebar";
import "./main.css";
export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard" style={{ textAlign: "left" }}>
        <h1>
          <b>Dashboard</b>
        </h1>
      </div>
    </div>
  );
}
