
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';// using for get token 
import axios from "axios";
import "./addDetails.css";
import {useNavigate } from 'react-router-dom';

const AddDetails = () => {
   const navigate = useNavigate();//inbuilt 
   const [userDetails,setUserDetails]=useState({})
  
  //  const [userRole,setUserRole]=useState(null)
  

//     //get token 
//    const AddDetails = () => {
//   const location = useLocation();
//   const { token } = location.state || {};
  
//   useEffect(() => {
//     if (token) {
//       // Do something with the token, e.g., set it in headers for subsequent requests
//       console.log("Token received:", token);
//     } else {
//       console.error("No token found in location state");
//     }
//   }, [token]);

// };


 


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
  



 
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    studentNumber: "",
    // teacherId: "",
    gender: "",
    dob: "",
    fathersName: "",
    mothersName: "",
    email: "",
    phone: "",
    address: "",
    role:userDetails.role,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/register", profileData)
      .then((response) => {
        alert("Profile updated successfully!");
        console.log("profile updated succesfully")
        localStorage.setItem("userinfo", JSON.stringify({ email: profileData.email }));
        navigate('/home');
        
      })
      .catch((error) => {
        console.error("There was an error updating the profile data!", error);
      });
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/user/new")
  //     .then((response) => {
  //       setProfileData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the profile data!", error);
  //     });
  // }, []);

  return (
    <>
      {userDetails && userDetails.role === "teacher" ? (
        <div className="box">
          <h1 className="title">Teacher</h1>
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name:</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={profileData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name:</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={profileData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="gender-details">
                <span className="gender-title">Gender:</span>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="options"
                >
                  <option value="">Please select one…</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="prefer-not-to-answer">Prefer not to answer</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">DOB:</span>
                <input
                  type="date"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Email:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone:</span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={profileData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Address:</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={profileData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Save" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      ) : userDetails && userDetails.role === "student" ? (
        <div className="box">
          <h1 className="title">Student</h1>
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name:</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={profileData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name:</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={profileData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Fathers Name:</span>
                <input
                  type="text"
                  name="fathersName"
                  placeholder="Enter your father's name"
                  value={profileData.fathersName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Mothers Name:</span>
                <input
                  type="text"
                  name="mothersName"
                  placeholder="Enter your mother's name"
                  value={profileData.mothersName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Student Number:</span>
                <input
                  type="text"
                  name="studentNumber"
                  placeholder="Enter your student number"
                  value={profileData.studentNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="gender-details">
                <span className="gender-title">Gender:</span>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="options"
                >
                  <option value="">Please select one…</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="prefer-not-to-answer">Prefer not to answer</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">DOB:</span>
                <input
                  type="date"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Email:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone:</span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={profileData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Address:</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={profileData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Save" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default AddDetails;