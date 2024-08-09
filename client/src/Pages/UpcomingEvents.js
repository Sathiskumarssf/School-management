// src/components/UpcomingEvents.js
import React from 'react';
import events from '../data/events';

const UpcomingEvents = () => {
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
