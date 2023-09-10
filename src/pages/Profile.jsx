import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Profile({ user }) {
    const [student, setStudent] = useState(null);
    const [activeTab, setActiveTab] = useState("personal");

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "students", user.uid), (doc) => {
            setStudent(doc.data());
        });
        return unsubscribe;
    }, [user]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="flex mb-4">
                <button
                    className={`${activeTab === "personal" ? "bg-gray-200" : ""
                        } px-4 py-2 rounded-lg mr-4`}
                    onClick={() => handleTabClick("personal")}
                >
                    Personal
                </button>
                <button
                    className={`${activeTab === "academic" ? "bg-gray-200" : ""
                        } px-4 py-2 rounded-lg mr-4`}
                    onClick={() => handleTabClick("academic")}
                >
                    Academic
                </button>
                <button
                    className={`${activeTab === "classes" ? "bg-gray-200" : ""
                        } px-4 py-2 rounded-lg`}
                    onClick={() => handleTabClick("classes")}
                >
                    Classes
                </button>
            </div>
            {activeTab === "personal" && (
                <div>
                    <p>Name: {student.name}</p>
                    <p>Enrollment No.: {student.enrollmentNo}</p>
                    <p>Email: {student.email}</p>
                </div>
            )}
            {activeTab === "academic" && (
                <div>
                    <p>Department: {student.department}</p>
                    <p>Program: {student.program}</p>
                    <p>Current Semester: {student.currentSemester}</p>
                    <p>Current Session: {student.currentSession}</p>
                    <p>Important Data: {student.importantData}</p>
                </div>
            )}
            {activeTab === "classes" && (
                <div>
                    <h2>Subjects</h2>
                    <ul>
                        {student.subjects.map((subject) => (
                            <li key={subject.id}>{subject.name}</li>
                        ))}
                    </ul>
                    <h2>Classes</h2>
                    <ul>
                        {student.classes.map((classItem) => (
                            <li key={classItem.id}>{classItem.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}