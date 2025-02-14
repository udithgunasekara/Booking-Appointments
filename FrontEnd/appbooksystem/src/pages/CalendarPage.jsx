import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import BookedAppointments from '../components/BookedAppointment';

const CalendarPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>

      <header className="bg-white shadow-md mb-6">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Book an Appointment
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                Welcome User
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

 
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <BookedAppointments />
          </div>
          <div className="md:w-3/4">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;