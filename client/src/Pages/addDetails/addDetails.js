import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AddDetails = () => {
  const navigate = useNavigate();//inbuilt 
  const [userDetails,setUserDetails]=useState({})
 





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
   grade:"",
   devition:"",
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
   console.log(profileData)
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

  return (
    <  >
        <Navbar className='p-0 m-0'/>
      <div>
        {userDetails && userDetails.role === "teacher" ? (
          <div className="flex flex-col max-w-full w-full bg-gradient-to-tr from-gray-200 to-teal-600 items-center justify-center p-6 rounded-lg">
            <h1 className="mb-5 text-black font-bold">Teacher</h1>
            <form className="flex flex-col max-w-3/4 p-10 bg-white rounded-lg shadow-lg mx-auto">
              <div className="flex flex-wrap justify-between">
                <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                  <label className="font-semibold block mb-2">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                  <label className="font-semibold block mb-2">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Gender:</label>
                  <select
                    name="gender"
                    value={profileData.gender}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  >
                    <option value="">Please select one…</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="prefer-not-to-answer">Prefer not to answer</option>
                  </select>
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">DOB:</label>
                  <input
                    type="date"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Address:</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={profileData.address}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
              </div>
              <div className="h-11 my-5">
                <input
                  type="submit"
                  value="Save"
                  onClick={handleSubmit}
                  className="h-full w-full bg-teal-600 hover:bg-teal-700 rounded-md text-white font-semibold transform transition-transform duration-300"
                />
              </div>
            </form>
          </div>
        ) : userDetails && userDetails.role === "student" ? (
          <div className="flex flex-col max-w-full w-full  bg-gradient-to-tr from-gray-200 to-teal-600 items-center justify-center rounded-lg">
            <h1 className="mb-5 text-black font-bold  ">Student</h1>
            <form className="flex flex-col max-w-3/4  bg-white rounded-lg shadow-lg mx-auto  p-9 m-6">
              <div className="flex flex-wrap justify-between">
                <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                  <label className="font-semibold block mb-2">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                  <label className="font-semibold block mb-2">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                <span className="font-semibold block mb-2">Fathers Name:</span>
                <input
                  type="text"
                  name="fathersName"
                  placeholder="Enter your father's name"
                  value={profileData.fathersName}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                />
              </div>
              <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                <span className="font-semibold block mb-2">Mothers Name:</span>
                <input
                  type="text"
                  name="mothersName"
                  placeholder="Enter your mother's name"
                  value={profileData.mothersName}
                  className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  onChange={handleChange}
                />
              </div>
                <div className="mb-6 w-full md:w-[calc(50%-20px)]">
                <span className="font-semibold block mb-2">Grade:</span>
                <select
                  name="grade"
                  value={profileData.grade}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                >
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div><div className="mb-6 w-full md:w-[calc(50%-20px)]">
                <span className="font-semibold block mb-2">Devition:</span>
                <select
                  name="devition"
                  value={profileData.devition}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3s"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  
                </select>
              </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Gender:</label>
                  <select
                    name="gender"
                    value={profileData.gender}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  >
                    <option value="">Please select one…</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="prefer-not-to-answer">Prefer not to answer</option>
                  </select>
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">DOB:</label>
                  <input
                    type="date"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="font-semibold block mb-2">Address:</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={profileData.address}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-200 focus:border-teal-300 px-3"
                  />
                </div>
              </div>
              <div className="h-11 my-5">
                <input
                  type="submit"
                  value="Save"
                  onClick={handleSubmit}
                  className="h-full w-full bg-teal-600 hover:bg-teal-700 rounded-md text-white font-semibold transform transition-transform duration-300"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col max-w-full w-full bg-gradient-to-tr from-gray-200 to-teal-600 items-center justify-center p-6 rounded-lg">
            <h1 className="text-white font-bold">Please select your role</h1>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default AddDetails;
