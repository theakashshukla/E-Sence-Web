import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import LoginPage from "./utils/auth/Login";
import RegisterPage from "./utils/auth/Register";
import StudentList from "./utils/student/StudentListView";
import UserProfile from './components/UserProfile';
import Classes from './components/Classes';
import Report from './components/Report';
import LogOutModal from './utils/auth/LogOutModal';

const auth = getAuth();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hello", user)
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="app">
        <LoginPage />
        <RegisterPage />
      </div>
    );
  }
  return (
    <div className="app">


      <Router>
        <Navbar>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/User" element={<UserProfile />} />
            <Route path="/Student" element={<StudentList />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Classes" element={<Classes />} />
            <Route path="/LogOut" element={<LogOutModal />} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  );
}

// import { Routes, Route, NavLink } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Student from './pages/Student';
// import LoginPage from './utils/auth/Login';
// import Report from './components/Report';

// function Navigation() {
//   const navigation = [
//     { name: "Dashboard", path: "/", exact: true },
//     { name: "Login", path: "/login" },
//     { name: "Student", path: "/student" },
//     { name: "Report", path: "/report" },
//   ];

//   return (
//     <nav>
//       {navigation.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           activeClassName="bg-gray-900 text-white"
//           exact={item.exact}
//           className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//         >
//           {item.name}
//         </NavLink>
//       ))}
//     </nav>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <header className="bg-white shadow">
//         <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
//           <Navigation />
//         </div>
//       </header>
//       <main>
//         <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//           <Routes>
//             <Route exact path="/" component={<Dashboard/>} />
//             <Route path="/login" component={<LoginPage/>} />
//             <Route path="/student" component={<Student/>} />
//             <Route path="/report" component={<Report/>} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// }

