import AddProfessorModal from "../components/add/AddProfessorModal";
import AddSubjectModal from "../components/add/AddSubjectModal";
import AddClassModal from "../components/add/AddClassModal";
import TestPro from "../components/add/TestPro";
import ClassesForm from "../components/add/ClassForm";


export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddProfessorModal />
      <AddSubjectModal />
      <AddClassModal/>
      <TestPro/>
      <ClassesForm/>
    </div>
  );
}
