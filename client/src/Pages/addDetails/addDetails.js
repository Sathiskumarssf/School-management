import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addDetails.css";

const AddDetails = () => {
  const role = "teacher";
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
    role:role,
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
    { role === "teacher"?  
    <>
    <div className="container" >
    <h1 className="title">Teacher</h1>
    <form >
        <div className="user-details">
        <div className="input-box">
          <span class="details">First Name:</span>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={profileData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Last Name:</span>

          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={profileData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* <div className="input-box">
          <span class="details">Teacher ID:</span>

          <input
            type="text"
            name="teacherId"
            value={profileData.teacherId}
            onChange={handleChange}
          />
        </div> */}
        <div className="gender-details"> 
          <span class="gender-title">Gender:</span>

          <select
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
            class="options"
          >
            <option value="">Please select one…</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-Binary</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-answer">Prefer not to answer</option>
          </select>
        </div>
        <div className="input-box">
          <span class="details">DOB:</span>

          <input
            type="date"
            name="dob"
            value={profileData.dob}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-box">
          <span class="details">Email:</span>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Phone:</span>

          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={profileData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Address:</span>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={profileData.address}
            onChange={handleChange}
          />
        </div>
        </div>
      
        {/* <button type="submit">Save</button> */}
        <div class="button">
          <input type="submit" value="Save" onClick={handleSubmit}/>

        </div>
      </form>
      
    </div>
    
      </>:

      <>
       <div className="container" >
    <h1 className="title">Student</h1>
    <form >
        <div className="user-details">
        <div className="input-box">
          <span class="details">First Name:</span>
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Last Name:</span>

          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Fathers Name:</span>
          <input
            type="text"
            name="fathersName"
            value={profileData.fathersName}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Mothers Name:</span>
          <input
            type="text"
            name="mothersName"
            value={profileData.mothersName}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">student Number:</span>

          <input
            type="text"
            name="studentNumber"
            value={profileData.studentNumber}
            onChange={handleChange}
          />
        </div>
        <div className="gender-details"> 
          <span class="gender-title">Gender:</span>

          <select
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
            class="options"
          >
            <option value="">Please select one…</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-Binary</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-answer">Prefer not to answer</option>
          </select>
        </div>
        <div className="input-box">
          <span class="details">DOB:</span>

          <input
            type="date"
            name="dob"
            value={profileData.dob}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-box">
          <span class="details">Email:</span>

          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Phone:</span>

          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <span class="details">Address:</span>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleChange}
          />
        </div>
        </div>
      
        {/* <button type="submit">Save</button> */}
        <div class="button">
          <input type="submit" value="Save" onClick={handleSubmit}/>
        </div>
      </form>
      
    </div>
     </> }
     
    </>
  );
};

export default AddDetails;
