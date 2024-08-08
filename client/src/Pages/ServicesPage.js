import React from "react"; //fggfghfhgfghfg

const services = [
  {
    title: "Student Enrollment",
    description: "Register new students and manage their profiles efficiently.",
    icon: "user-plus",
  },
  {
    title: "Class Scheduling",
    description:
      "Create and manage class schedules for different grades and subjects.",
    icon: "calendar-alt",
  },
  {
    title: "Grade Management",
    description:
      "Record and track student grades, generate report cards, and more.",
    icon: "chart-line",
  },
  {
    title: "Attendance Tracking",
    description:
      "Monitor student attendance, generate reports, and manage absences.",
    icon: "check-circle",
  },
  {
    title: "Parent Communication",
    description:
      "Send notifications and updates to parents, and manage parent-teacher interactions.",
    icon: "envelope",
  },
  {
    title: "User Management",
    description:
      "Manage user roles and permissions, including admin, teacher, and student accounts.",
    icon: "users-cog",
  },
  {
    title: "Student Timetable",
    description:
      "View and manage student timetables for better organization and planning.",
    icon: "clock",
  },
  {
    title: "Teacher Timetable",
    description:
      "Create and manage teacher timetables to streamline scheduling.",
    icon: "calendar-day",
  },
  {
    title: "Upcoming Events",
    description: "Keep track of upcoming school events and important dates.",
    icon: "calendar-check",
  },
  {
    title: "Student Marks Details",
    description:
      "Access detailed information on student marks and academic performance.",
    icon: "file-alt",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <i
                    className={`fas fa-${service.icon} text-gray-700 text-2xl bg-slate-400`}
                  />
                </div>
                <h2 className="text-xl font-semibold text-customColor4">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
