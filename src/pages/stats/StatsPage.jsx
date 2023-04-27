import React from "react";
import { db } from "../../firebase";

// Define the ViewModel
class StatsViewModel {
  constructor() {
    this.studentCount = 0;
    this.classCount = 0;
  }

  async getStudentList() {
    // Retrieve list of students from Firebase Firestore
    const students = await db.collection("students").get();

    // Transform data into array of student objects
    const studentList = students.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      attendance: doc.data().attendance,
    }));

    return studentList;
  }

  async getClassList() {
    // Retrieve list of classes from Firebase Firestore
    const classes = await db.collection("classes").get();

    // Transform data into array of class objects
    const classList = classes.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      teacher: doc.data().teacher,
      date: doc.data().date,
      time: doc.data().time,
      attendance: doc.data().attendance,
    }));

    return classList;
  }
}

// Create the StatsPage component
function StatsPage() {
  const viewModel = new StatsViewModel();

  const handleStudentClick = async () => {
    const studentList = await viewModel.getStudentList();
    // Render the student list component
  };

  const handleClassClick = async () => {
    const classList = await viewModel.getClassList();
    // Render the class list component
  };

  return (
    <div>
      <div
        className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
        onClick={handleStudentClick}
      >
        <div className="text-lg font-medium">Student Count</div>
        <div className="text-3xl font-bold">{viewModel.studentCount}</div>
      </div>
      <div
        className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
        onClick={handleClassClick}
      >
        <div className="text-lg font-medium">Class Count</div>
        <div className="text-3xl font-bold">{viewModel.classCount}</div>
      </div>
    </div>
  );
}


