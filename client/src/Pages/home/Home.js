
import React, { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from "axios";

const Home = () => {
   const [userDetails,setUserDetails]=useState({})



   const [profileData, setProfileData] = useState({
    email: "",
    role:userDetails.role,
  });

     useEffect(() => {
     const fetchUserDetails = async () => {
      try {
        const userinfo = JSON.parse(localStorage.getItem("userinfo"));
        if (userinfo && userinfo.email) {
          const email = userinfo.email;
          const response = await axios.get(
            `http://localhost:5000/api/v1/getUserByEmail/${email}`
          );
          if (response.data) {
            setUserDetails(response.data);
            setProfileData(prevData => ({
              ...prevData,
              ...response.data,
              role: response.data.role // Update role based on response
            }));
            console.log('User details:', response.data);
            console.log(response.data.role)
          }
        } else {
          console.error("No user info found in local storage");
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    fetchUserDetails();
  }, []);
  




  const [currentSection, setCurrentSection] = useState("Timetable");
  const [currentGrade, setCurrentGrade] = useState("6");
  const [currentDivision, setCurrentDivision] = useState("B");

  const timetableData = {
    "6": {
      "A": [
        { time: "8:00-9:00", subject: "Math", teacher: "Mr. Smith" },
        { time: "9:00-9:30", subject: "Break", teacher: "" },
        { time: "9:30-10:30", subject: "Science", teacher: "Ms. Johnson" },
        { time: "10:30-11:30", subject: "English", teacher: "Mrs. Brown" },
        { time: "11:30-12:30", subject: "History", teacher: "Mr. Davis" },
        { time: "12:30-1:30", subject: "Physical Education", teacher: "Coach Lee" }
      ],
      "B": [
        { time: "8:00-9:00", subject: "Science", teacher: "Ms. Johnson" },
        { time: "9:00-9:30", subject: "Break", teacher: "" },
        { time: "9:30-10:30", subject: "Math", teacher: "Mr. Smith" },
        { time: "10:30-11:30", subject: "Geography", teacher: "Mr. Thompson" },
        { time: "11:30-12:30", subject: "Art", teacher: "Ms. Robinson" },
        { time: "12:30-1:30", subject: "English", teacher: "Mrs. Brown" }
      ],
      "C": [
        { time: "8:00-9:00", subject: "English", teacher: "Mrs. Brown" },
        { time: "9:00-9:30", subject: "Break", teacher: "" },
        { time: "9:30-10:30", subject: "Math", teacher: "Mr. Smith" },
        { time: "10:30-11:30", subject: "Music", teacher: "Mr. Williams" },
        { time: "11:30-12:30", subject: "Science", teacher: "Ms. Johnson" },
        { time: "12:30-1:30", subject: "History", teacher: "Mr. Davis" }
      ]
    },
    "7": {
      "A": [
        { time: "8:00-9:00", subject: "History", teacher: "Mr. Davis" },
        { time: "9:00-9:30", subject: "Break", teacher: "" },
        { time: "9:30-10:30", subject: "Math", teacher: "Mr. Smith" },
        { time: "10:30-11:30", subject: "Science", teacher: "Ms. Johnson" },
        { time: "11:30-12:30", subject: "Physical Education", teacher: "Coach Lee" },
        { time: "12:30-1:30", subject: "Art", teacher: "Ms. Robinson" }
      ],
      "B": [
        { time: "8:00-9:00", subject: "Geography", teacher: "Mr. Thompson" },
        { time: "9:00-9:30", subject: "Break", teacher: "" },
        { time: "9:30-10:30", subject: "English", teacher: "Mrs. Brown" },
        { time: "10:30-11:30", subject: "Math", teacher: "Mr. Smith" },
        { time: "11:30-12:30", subject: "History", teacher: "Mr. Davis" },
        { time: "12:30-1:30", subject: "Science", teacher: "Ms. Johnson" }
      ],
      "C": [
        { time: "8:00-9:00", subject: "Science", teacher: "Ms. Johnson" },
        { time: "9:00-9:30", subject: "Break", teacher: "" },
        { time: "9:30-10:30", subject: "Math", teacher: "Mr. Smith" },
        { time: "10:30-11:30", subject: "History", teacher: "Mr. Davis" },
        { time: "11:30-12:30", subject: "Geography", teacher: "Mr. Thompson" },
        { time: "12:30-1:30", subject: "Physical Education", teacher: "Coach Lee" }
      ]
    },
    // Similarly add data for grades 8, 9, 10, and 11
  };

  // Function to render timetable for a specific grade and division
  const renderTimetable = (grade, division) => {
    const timetable = timetableData[grade][division];
    return (
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-slate-400">
            <th className="px-4 py-2 border">Time</th>
            <th className="px-4 py-2 border">Subject</th>
            <th className="px-4 py-2 border">Teacher</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((slot, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="border px-4 py-2">{slot.time}</td>
              <td className="border px-4 py-2">{slot.subject}</td>
              <td className="border px-4 py-2">{slot.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const sections = {
    Timetable: renderTimetable(currentGrade, currentDivision),
    "Upcoming events": <div>Upcoming Events Content</div>,
    "Your Details": <div>Your Details Content</div>,
    "Teachers informations": <div>Teachers Information Content</div>
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow w-full">
        <nav className="w-full h-1 bg-customColor3 mt-14 fixed z-50 p-5 flex justify-around items-center">
          {Object.keys(sections).map((section) => (
            <a
              href="#"
              key={section}
              className={`  hover:text-white ${currentSection === section ? '  text-white' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection(section);
              }}
            >
              {section}
            </a>
          ))}
        </nav>
        {/* body */}
        <div className="mt-20 p-5">
          {sections[currentSection]}
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default Home;
