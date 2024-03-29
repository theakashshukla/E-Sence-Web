import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const AddSubjectModal = () => {
  const [subject, setSubject] = useState({ name: "", code: "" });
  const [department, setDepartment] = useState({ name: "", code: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const departmentsRef = collection(db, "departments");
  const [departments] = useCollection(departmentsRef);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const subjectsRef = collection(db, "subjects");
      await addDoc(subjectsRef, {
        subject,
        department,
        creationTime: serverTimestamp(),
      });
      setLoading(false);
      setShowModal(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err.message);
    }
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
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-end">
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaPlus className="inline-block mr-2 mb-1" />
            Add Subject
          </button>
        </div>
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                {error && <div className="text-red-500">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="w-full">
                        <div className="mb-4">
                          <label
                            htmlFor="sub_name"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Subject Name
                          </label>
                          <input
                            type="text"
                            id="sub_name"
                            value={subject.name}
                            onChange={(e) =>
                              setSubject({ ...subject, name: e.target.value })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="sub_code"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Subject Code
                          </label>
                          <input
                            type="text"
                            id="sub_code"
                            value={subject.code}
                            onChange={(e) =>
                              setSubject({ ...subject, code: e.target.value })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="department"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Department
                          </label>
                          <select
                            id="department"
                            value={department.name}
                            onChange={(e) => {
                              setDepartment({
                                name: e.target.value,
                                code: e.target.options[e.target.selectedIndex]
                                  .id,
                              });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                          >
                            <option value="">Select a department</option>
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
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>

                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={closeModal}
                      disabled={loading}
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

export default AddSubjectModal;
