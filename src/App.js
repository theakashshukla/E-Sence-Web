import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import RegisterPage from "./utils/auth/Register";
import StudentList from "./utils/student/StudentListView";
import LoginPage from "./utils/auth/Login";
import Dashboard from './pages/Dashboard';


export default function App() {


  return (
    <div className="app">


      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="student" activeClassName="active" element={<StudentList />} />
            <Route path="register" activeClassName="active" element={<RegisterPage />} />
            <Route path="login" activeClassName="active" element={<LoginPage />} />
          </Route>
          
        </Routes>
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

