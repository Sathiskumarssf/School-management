
import React from "react";


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our School</h2>
          <p className="text-gray-700">
            Welcome to St.Peter's College! We are dedicated to nurturing young
            minds and providing a comprehensive education that prepares students
            for the future. Our curriculum is designed to foster academic
            excellence, creativity, and critical thinking. We offer a range of
            extracurricular activities to support holistic development and
            encourage students to explore their passions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Student Management System
          </h2>
          <p className="text-gray-700">
            Our Student Management System is an advanced tool designed to
            streamline the administration of student data. It provides an
            intuitive interface for managing student records, providing upcoming
            events, recording grades, and generating reports. The system
            enhances communication between students, parents, and school staff,
            ensuring that everyone stays informed and engaged.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Team Member 1 */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">John Britto</h3>
              <p className="text-gray-700 mb-4">Principal</p>
              <p className="text-gray-600">
                John Britto has over 20 years of experience in educational
                leadership. He is passionate about fostering an environment
                where students can thrive academically and personally.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Ajay Stephan</h3>
              <p className="text-gray-700 mb-4">Administrative Director</p>
              <p className="text-gray-600">
                Ajay Stephan oversees the day-to-day operations of the school.
                With a background in administration and finance, he ensures that
                the school's resources are managed effectively.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Joy Ferdinant</h3>
              <p className="text-gray-700 mb-4">Head of Academic Affairs</p>
              <p className="text-gray-600">
                Joy Ferdinant leads the academic programs and curriculum
                development. Her expertise in education ensures that our
                students receive a top-notch learning experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
          <p className="text-gray-700 mb-4">
           
            Our mission is to provide a nurturing environment that encourages
            academic success, personal growth, and lifelong learning. We are
            committed to delivering high-quality education and fostering a
            strong sense of community among students, parents, and staff.
          </p>
          <p className="text-gray-700">
            Our vision is to be a leading educational institution that inspires
            and empowers students to achieve their full potential. We aim to
            cultivate a love for learning and prepare students to excel in an
            ever-changing world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;