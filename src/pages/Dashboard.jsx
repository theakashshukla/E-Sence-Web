import StatsPage from "../components/stats/StatsPage";
import StudentList from "../utils/student/StudentListView";

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="lg:w-1/2">
          <StatsPage />
        </div>
        <div className="lg:w-1/2">
          <StudentList />
        </div>
      </div>
    </div>
  );
}
