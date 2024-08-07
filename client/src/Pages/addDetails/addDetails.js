// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./addDetails.css";

// const AddDetails = () => {
//   const role = "teacher";
//   const [profileData, setProfileData] = useState({
//     firstName: "",
//     lastName: "",
//     studentNumber: "",
//     // teacherId: "",
//     gender: "",
//     dob: "",
//     fathersName: "",
//     mothersName: "",
//     email: "",
//     phone: "",
//     address: "",
//     role:role,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/v1/register", profileData)
//       .then((response) => {
//         alert("Profile updated successfully!");
//         console.log("profile updated succesfully")
        
//       })
//       .catch((error) => {
//         console.error("There was an error updating the profile data!", error);
//       });
//   };

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:5000/user/new")
//   //     .then((response) => {
//   //       setProfileData(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("There was an error fetching the profile data!", error);
//   //     });
//   // }, []);

//   return (
//     <>
//     { role === "student"?  
//     <>
//     <div className="box" >
//     <h1 className="title">Teacher</h1>
//     <form >
//         <div className="user-details">
//         <div className="input-box">
//           <span class="details">First Name:</span>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter your first name"
//             value={profileData.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Last Name:</span>

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter your last name"
//             value={profileData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         {/* <div className="input-box">
//           <span class="details">Teacher ID:</span>

//           <input
//             type="text"
//             name="teacherId"
//             value={profileData.teacherId}
//             onChange={handleChange}
//           />
//         </div> */}
//         <div className="gender-details"> 
//           <span class="gender-title">Gender:</span>

//           <select
//             name="gender"
//             value={profileData.gender}
//             onChange={handleChange}
//             className="options"
//           >
//             <option value="">Please select one…</option>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//             <option value="non-binary">Non-Binary</option>
//             <option value="prefer-not-to-answer">Prefer not to answer</option>
//           </select>
//         </div>
//         <div className="input-box">
//           <span class="details">DOB:</span>

//           <input
//             type="date"
//             name="dob"
//             value={profileData.dob}
//             onChange={handleChange}
//           />
//         </div>
        
//         <div className="input-box">
//           <span class="details">Email:</span>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={profileData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Phone:</span>

//           <input
//             type="text"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={profileData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Address:</span>
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter your address"
//             value={profileData.address}
//             onChange={handleChange}
//           />
//         </div>
//         </div>
      
//         {/* <button type="submit">Save</button> */}
//         <div class="button">
//           <input type="submit" value="Save" onClick={handleSubmit}/>

//         </div>
//       </form>
      
//     </div>
    
//       </>:

//       <>
//        <div className="box" >
//     <h1 className="title">Student</h1>
//     <form >
//         <div className="user-details">
//         <div className="input-box">
//           <span class="details">First Name:</span>
//           <input
//             type="text"
//             name="firstName"
//              placeholder="Enter your first name"
//             value={profileData.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Last Name:</span>

//           <input
//             type="text"
//             name="lastName"
//              placeholder="Enter your last name"
//             value={profileData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Fathers Name:</span>
//           <input
//             type="text"
//             name="fathersName"
//              placeholder="Enter your fathers name"
//             value={profileData.fathersName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Mothers Name:</span>
//           <input
//             type="text"
//             name="mothersName"
//              placeholder="Enter your mothers name"
//             value={profileData.mothersName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Student Number:</span>

//           <input
//             type="text"
//             name="studentNumber"
//              placeholder="Enter your student number"
//             value={profileData.studentNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="gender-details"> 
//           <span class="gender-title">Gender:</span>

//           <select
//             name="gender"
//             value={profileData.gender}
//             onChange={handleChange}
//             className="options"
//           >
//             <option value="">Please select one…</option>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//             <option value="non-binary">Non-Binary</option>
//             <option value="prefer-not-to-answer">Prefer not to answer</option>
//           </select>
//         </div>
//         <div className="input-box">
//           <span class="details">DOB:</span>

//           <input
//             type="date"
//             name="dob"
//             value={profileData.dob}
//             onChange={handleChange}
//           />
//         </div>
        
//         <div className="input-box">
//           <span class="details">Email:</span>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={profileData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Phone:</span>

//           <input
//             type="text"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={profileData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-box">
//           <span class="details">Address:</span>
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter your address"
//             value={profileData.address}
//             onChange={handleChange}
//           />
//         </div>
//         </div>
      
//         {/* <button type="submit">Save</button> */}
//         <div class="button">
//           <input type="submit" value="Save" onClick={handleSubmit}/>
//         </div>
//       </form>
      
//     </div>
//      </> }
     
//     </>
//   );
// };

// export default AddDetails;
import React, { useState } from "react";
import axios from "axios";

const AddDetails = () => {
  const role = "teacher";
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    studentNumber: "",
    gender: "",
    dob: "",
    fathersName: "",
    mothersName: "",
    email: "",
    phone: "",
    address: "",
    role: role,
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
        console.log("profile updated successfully");
      })
      .catch((error) => {
        console.error("There was an error updating the profile data!", error);
      });
  };

  return (
    <>
      {role === "student" ? (
        <div className="flex flex-col items-center justify-center w-full p-6 bg-blue-50">
          <h1 className="mb-6 text-3xl font-bold text-black">Student</h1>
          <form
            className="flex flex-col w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pr-2">
                <label className="block mb-2 font-semibold">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pl-2">
                <label className="block mb-2 font-semibold">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pr-2">
                <label className="block mb-2 font-semibold">Fathers Name:</label>
                <input
                  type="text"
                  name="fathersName"
                  placeholder="Enter your father's name"
                  value={profileData.fathersName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pl-2">
                <label className="block mb-2 font-semibold">Mothers Name:</label>
                <input
                  type="text"
                  name="mothersName"
                  placeholder="Enter your mother's name"
                  value={profileData.mothersName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pr-2">
                <label className="block mb-2 font-semibold">Student Number:</label>
                <input
                  type="text"
                  name="studentNumber"
                  placeholder="Enter your student number"
                  value={profileData.studentNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pl-2">
                <label className="block mb-2 font-semibold">Gender:</label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                >
                  <option value="">Please select one…</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="prefer-not-to-answer">Prefer not to answer</option>
                </select>
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pr-2">
                <label className="block mb-2 font-semibold">DOB:</label>
                <input
                  type="date"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pl-2">
                <label className="block mb-2 font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pr-2">
                <label className="block mb-2 font-semibold">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pl-2">
                <label className="block mb-2 font-semibold">Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={profileData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-customColor3 rounded-md hover:bg-customColor4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full p-6 bg-blue-50">
          <h1 className="mb-6 text-3xl font-bold text-black">Teacher</h1>
          <form
            className="flex flex-col w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pr-2">
                <label className="block mb-2 font-semibold">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pl-2">
                <label className="block mb-2 font-semibold">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pl-2">
                <label className="block mb-2 font-semibold">Gender:</label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                >
                  <option value="">Please select one…</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="prefer-not-to-answer">Prefer not to answer</option>
                </select>
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pr-2">
                <label className="block mb-2 font-semibold">DOB:</label>
                <input
                  type="date"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pl-2">
                <label className="block mb-2 font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pr-2">
                <label className="block mb-2 font-semibold">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full mb-4 md:w-1/2 md:pl-2">
                <label className="block mb-2 font-semibold">Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={profileData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-customColor3 rounded-md hover:bg-customColor4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddDetails;
