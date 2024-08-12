// src/components/UpcomingEvents.js
import React from 'react';


const UpcomingEvents = () => {

  const events = [
    {
      id: 1,
      name: "Science Fair",
      date: "2024-09-10",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      organizer: "Science Department",
      description: "A showcase of student projects across various scientific disciplines. Parents and students are invited to explore the innovative experiments and models presented by our budding scientists."
    },
    {
      id: 2,
      name: "Sports Day",
      date: "2024-09-20",
      time: "8:00 AM - 2:00 PM",
      location: "School Grounds",
      organizer: "Physical Education Department",
      description: "A day filled with athletic competitions, including track and field events, football, and more. Students will compete for house points and individual awards. Come cheer for your favorite teams!"
    },
    {
      id: 3,
      name: "Parent-Teacher Conference",
      date: "2024-10-05",
      time: "1:00 PM - 4:00 PM",
      location: "Classrooms 1-12",
      organizer: "School Administration",
      description: "An opportunity for parents to meet with teachers to discuss their child’s progress, strengths, and areas for improvement. Individual appointments will be scheduled with each teacher."
    },
    {
      id: 4,
      name: "Winter Concert",
      date: "2024-12-15",
      time: "6:00 PM - 8:00 PM",
      location: "School Auditorium",
      organizer: "Music Department",
      description: "An evening of musical performances by the school choir, band, and orchestra. Enjoy a selection of winter classics and holiday tunes performed by our talented students."
    },
    {
      id: 5,
      name: "Art Exhibition",
      date: "2024-11-25",
      time: "10:00 AM - 3:00 PM",
      location: "School Art Gallery",
      organizer: "Art Department",
      description: "An exhibition showcasing artwork created by students across all grades. The exhibition will include paintings, sculptures, and mixed media pieces."
    }
  ];
  
 
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.name}</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Date:</span> {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Time:</span> {event.time}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Location:</span> {event.location}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Organizer:</span> {event.organizer}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
