import Sidebar from "../../components/Sidebar";
export default function LessonsPage() {
  const tools = [{ title: "Tạo bài tập" }, { title: "Tạo bài kiểm tra" }];
  return (
    <div className="container">
      <Sidebar />
      <div className="title">
        <h1>
          <b>Lessons</b>
        </h1>
      </div>
      <div className="card-grid">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <p>{tool.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
