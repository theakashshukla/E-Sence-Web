<<<<<<< Updated upstream
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";

export default function App() {
=======
import React from 'react';
import StudentList from './utils/StudentList';


function App() {

>>>>>>> Stashed changes

 
  return (
    <div className="app">
<<<<<<< Updated upstream
      <SignupPage/>
      <SigninPage/>
      <h1>Hi</h1>
      
=======

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">User Information</h1>
        <StudentList />

      </div>
>>>>>>> Stashed changes
    </div>
  );
}
