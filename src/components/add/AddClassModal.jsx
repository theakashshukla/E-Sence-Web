import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const AddClassModal = () => {
  const [className, setClassName] = useState("");
  const [timing, setTiming] = useState("");
  const [weekOfDay, setWeekOfDay] = useState("");
  const [specificTime, setSpecificTime] = useState("");
  const [department, setDepartment] = useState({ name: "", code: "" });
  const [professor, setProfessor] = useState({ name: "", id: "" });
  const [subject, setSubject] = useState({ name: "", code: "" });

  const [showModal, setShowModal] = useState(false);

  const [departments, loadingDepartments, errorDepartments] = useCollection(
    collection(db, "departments")
  );
  const [professors, loadingProfessors, errorProfessors] = useCollection(
    collection(db, "professors")
  );
  const [subjects, loadingSubjects, errorSubjects] = useCollection(
    collection(db, "subjects")
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const classesRef = collection(db, "classes");
      await addDoc(classesRef, {
        className,
        timing,
        weekOfDay,
        specificTime,
        department,
        professor,
        subject,
        creationTime: serverTimestamp(),
      });
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
    // Reset the form
    setClassName("");
    setTiming("");
    setWeekOfDay("");
    setSpecificTime("");
    setDepartment({ name: "", code: "" });
    setProfessor({ name: "", id: "" });
    setSubject({ name: "", code: "" });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>Add Class</button>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="className"
                    >
                      Class Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="className"
                      type="text"
                      placeholder="Enter class name"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="timing"
                    >
                      Timing
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="timing"
                      type="text"
                      placeholder="Enter class timing"
                      value={timing}
                      onChange={(e) => setTiming(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="weekOfDay"
                    >
                      Week of Day
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="weekOfDay"
                      type="text"
                      placeholder="Enter week of day"
                      value={weekOfDay}
                      onChange={(e) => setWeekOfDay(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="specificTime"
                    >
                      Specific Time
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="specificTime"
                      type="text"
                      placeholder="Enter specific time"
                      value={specificTime}
                      onChange={(e) => setSpecificTime(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="department"
                    >
                      Department
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="department"
                      value={department.name}
                      onChange={(e) => {
                        console.log(e.target.options, e.target.value);

                        setDepartment({
                          name: e.target.value,
                          code: e.target.options[e.target.selectedIndex].id,
                        });
                      }}
                    >
                      <option value="">-- Select department --</option>
                      {loadingDepartments && <option>Loading...</option>}
                      {errorDepartments && (
                        <option>Error fetching departments</option>
                      )}
                      {departments &&
                        departments.docs.map((doc) => (
                          <option
                            key={doc.id}
                            id={doc.data().department.code}
                            value={doc.data().department.name}
                          >
                            {doc.data().department.name} (
                            {doc.data().department.code})
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="professor"
                    >
                      Professor
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="professor"
                      value={professor.id}
                      onChange={(e) =>
                        setProfessor({
                          name: e.target.options[e.target.selectedIndex].text,
                          email: e.target.value,
                        })
                      }
                    >
                      <option value="">-- Select professor --</option>
                      {loadingProfessors && <option>Loading...</option>}
                      {errorProfessors && (
                        <option>Error fetching professors</option>
                      )}
                      {professors &&
                        professors.docs.map((doc) => (
                          <option key={doc.id} value={doc.data().id}>
                            {doc.data().name} ({doc.data().email})
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="subject"
                      value={subject.code}
                      onChange={(e) =>
                        setSubject({
                          name: e.target.options[e.target.selectedIndex].text,
                          code: e.target.value,
                        })
                      }
                    >
                      <option value="">-- Select subject --</option>
                      {loadingSubjects && <option>Loading...</option>}
                      {errorSubjects && (
                        <option>Error fetching subjects</option>
                      )}
                      {subjects &&
                        subjects.docs.map((doc) => (
                          <option key={doc.id} value={doc.data().code}>
                            {doc.data().subject.name} ({doc.data().subject.code}
                            )
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddClassModal;
