
import React from 'react';
import Student from './components/Student';


function App() {


  return (
    <div className="app">

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">User Information</h1>
        <Student />

      </div>
    </div>
  );
}

export default App;
