import AddClassModal from "../components/add/AddClassModal";
import AddProfessorModal from "../components/add/AddProfessorModal";
import AddSubjectModal from "../components/add/AddSubjectModal";


export default function Report() {
  return (
    <div>
      
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Report
        </h1>
      
      <div className="flex justify-evenly">
        <AddClassModal />
        <AddProfessorModal />
        <AddSubjectModal />
        </div>
    </div>
  );
}
