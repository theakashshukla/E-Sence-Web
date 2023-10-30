import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
// import { collection, getDocs, where, QuerySnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Define the ViewModel
class StatsViewModel {
  constructor() {
    this.studentCount = 0;
    this.absentCount = 0;
    this.classCount = 0;
    this.leaveCount = 0;
  }

  async getStudentList() {
    // Retrieve list of students from Firebase Firestore
    const students = await getDocs(collection(db, "students"));

    // Transform data into an array of student objects
    const studentList = students.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      enrollmentNo: doc.data().enrollmentNo,
      email: doc.data().email,
      department: doc.data().department,
      program: doc.data().program,
    }));

    return studentList;
  }

  async getClassList() {
    // Retrieve list of classes from Firebase Firestore
    const querySnapshot = await getDocs(collection(db, "classes"));

    // Transform data into an array of class objects
    const classList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      teacher: doc.data().teacher,
      date: doc.data().date,
      time: doc.data().time,
      attendance: doc.data().attendance,
    }));

    return classList;
  }

  async updateStats() {
    const studentList = await this.getStudentList();
    const classList = await this.getClassList();

    // const today = new Date().toISOString().split("T")[0];

    // Count present students
    this.studentCount = studentList.length;

    // Count absent students (less than 75% attendance)
    const absentStudents = studentList.filter(
      (student) =>
        student.enrollmentNo in classList &&
        classList[student.enrollmentNo].attendance < 75
    );
    this.absentCount = absentStudents.length;

    // Count total classes
    this.classCount = classList.length;

    // Count students on all runinng leave
    // const leaveStudents = studentList.filter(
    //   (student) =>
    //     student.enrollmentNo in classList &&
    //     classList[student.enrollmentNo].date <= today &&
    //     classList[student.enrollmentNo].attendance === 0

    // );
  }
}

// Create the StatsPage component
function StatsPage() {
  const [viewModel, setViewModel] = useState(new StatsViewModel());

  useEffect(() => {
    async function fetchStats() {
      await viewModel.updateStats();
      setViewModel(viewModel);
    }

    fetchStats();
  });
  // }, []);

  const handleStudentClick = async () => {
    // const studentList = await viewModel.getStudentList();
    // Render the student list component
  };

  const handleClassClick = async () => {
    // const classList = await viewModel.getClassList();
    // Render the class list component
  };

  const handleAbsentClick = async () => {
    // const studentList = await viewModel.getStudentList();
    // Render the absent student list component
  };

  const handleLeaveClick = async () => {
    // const studentList = await viewModel.getStudentList();
    // Render the leave student list component
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer w-64"
          onClick={handleStudentClick}
        >
          <div className="text-lg font-medium">Present</div>
          <div className="text-3xl font-bold">{viewModel.studentCount}</div>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer w-64"
          onClick={handleAbsentClick}
        >
          <div className="text-lg font-medium">Absent</div>
          <div className="text-3xl font-bold">{viewModel.absentCount}</div>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer w-64"
          onClick={handleClassClick}
        >
          <div className="text-lg font-medium">Classes</div>
          <div className="text-3xl font-bold">{viewModel.classCount}</div>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer w-64"
          onClick={handleLeaveClick}
        >
          <div className="text-lg font-medium">Leave</div>
          <div className="text-3xl font-bold">{viewModel.leaveCount}</div>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
