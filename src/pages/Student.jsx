import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


function Student() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const usersRef = collection(db, "users");
      const snapshot = await getDocs(usersRef);
      const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(users);
    }
    getUsers();
  }, []);
  

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Student List</h1>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <h2 className="text-lg font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-gray-700">{user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Student;
