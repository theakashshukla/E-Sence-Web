import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase"
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import LoginPage from "./utils/auth/Login";
import RegisterPage from "./utils/auth/Register";
import StudentList from "./utils/student/StudentListView";
import UserProfile from './components/UserProfile';
import Classes from './components/Classes';
import Report from './components/Report';
import LogoutModal from './utils/auth/LogoutModal';


export default function App() {
  const [user, setUser] = useState(null);

  // Add security headers to the response
  // useEffect(() => {
  
  //   // Security headers
  //   this.headers = {
  //     'Content-Security-Policy': "default-src 'self'",
  //     'X-Frame-Options': 'SAMEORIGIN',
  //     'X-XSS-Protection': '1; mode=block',
  //     'X-Content-Type-Options': 'nosniff',
  //     'Referrer-Policy': 'same-origin',
  //     'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  //   };

  //   // Add the security headers to the response
  //   const response = ({ headers }) => {
  //     return {
  //       headers: {
  //         ...headers,
  //         ...this.headers,
  //       },
  //     };
  //   };

  //   // Set the security headers on the response
  //   Router.prototype.render = response;
  // }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("Hello", user)
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
          </Routes>
        </Router>
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
            <Route path="/Logout" element={<LogoutModal />} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  );
}


