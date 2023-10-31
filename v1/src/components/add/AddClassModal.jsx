import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const AddClassModal = () => {
  const [className, setClassName] = useState("");
  const [timing, setTiming] = useState({ startTime: "", endTime: "" });
  const [weekOfDay, setWeekOfDay] = useState("");
  const [duration, setDuration] = useState("");
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
        duration,
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
    setTiming({ startTime: "", endTime: "" });
    setWeekOfDay("");
    duration("");
    setDepartment({ name: "", code: "" });
    setProfessor({ name: "", id: "" });
    setSubject({ name: "", code: "" });
  };

  useEffect(() => {
    const start = new Date(`01/01/2021 ${timing.startTime}`);
    const end = new Date(`01/01/2021 ${timing.endTime}`);
    const diff = (end - start) / (1000 * 60);
    setDuration(diff);
  }, [timing]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-end">
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaPlus className="inline-block mr-2 mb-1" />
            Add Class
          </button>
        </div>
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
                        required
                      />
                    </div>
                    <div className="flex ">
                      <div className="flex-1 m-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="timing_start"
                        >
                          Start Time
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="timing_start"
                          type="time"
                          placeholder="Start Time"
                          value={timing.startTime}
                          min="09:00"
                          max="18:00"
                          onChange={(e) =>
                            setTiming({ ...timing, startTime: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="flex-1 m-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="duration"
                        >
                          Duration
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="duration"
                          type="text"
                          placeholder="Enter class duration"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                      </div>
                      <div className="flex-1 m-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="timing_end"
                        >
                          End Time
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="timing_end"
                          type="time"
                          placeholder="Enter class timing"
                          value={timing.endTime}
                          min="09:40"
                          max="18:50"
                          onChange={(e) =>
                            setTiming({ ...timing, endTime: e.target.value })
                          }
                          required
                        />
                      </div>
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
                        type="weekOfDay"
                        placeholder="Enter week of day"
                        value={weekOfDay}
                        onChange={(e) => setWeekOfDay(e.target.value)}
                        required
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
                        required
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
                            name: e.target.value,
                            email: e.target.options[e.target.selectedIndex].id,
                          })
                        }
                        required
                      >
                        <option value="">-- Select professor --</option>
                        {loadingProfessors && <option>Loading...</option>}
                        {errorProfessors && (
                          <option>Error fetching professors</option>
                        )}
                        {professors &&
                          professors.docs.map((doc) => (
                            <option
                              key={doc.id}
                              id={doc.data().email}
                              value={doc.data().name}
                            >
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
                        value={subject.name}
                        onChange={(e) =>
                          setSubject({
                            name: e.target.value,
                            code: e.target.options[e.target.selectedIndex].id,
                          })
                        }
                        required
                      >
                        <option value="">-- Select subject --</option>
                        {loadingSubjects && <option>Loading...</option>}
                        {errorSubjects && (
                          <option>Error fetching subjects</option>
                        )}
                        {subjects &&
                          subjects.docs.map((doc) => (
                            <option
                              key={doc.id}
                              id={doc.data().subject.code}
                              value={doc.data().subject.name}
                            >
                              {doc.data().subject.name} (
                              {doc.data().subject.code})
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
      </div>
    </>
  );
};
export default AddClassModal;
