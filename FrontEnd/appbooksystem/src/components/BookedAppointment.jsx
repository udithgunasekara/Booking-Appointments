import React, { useState, useEffect } from 'react';
import { fetchAppointments, deleteAppointment } from '../service/BookingHanding';

const BookedAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = localStorage.getItem('token');

  const fetchAppoint = async () => {
    try {
      setIsLoading(true);
      const response = await fetchAppointments(username);
      setAppointments(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setError('Failed to load appointments');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppoint();
  }, [username]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await deleteAppointment(id, username);
        // Refresh the appointments list after successful deletion
        fetchAppoint();
      } catch (error) {
        console.error('Error deleting appointment:', error);
        alert('Failed to delete appointment');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-center text-gray-500">Loading appointments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-900">Your Appointments</h2>
      <div className="space-y-4">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="border-l-4 border-blue-800 pl-4 py-2 hover:bg-gray-50 relative group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{appointment.date}</p>
                  <p className="text-gray-600">{appointment.time}</p>
                  <p className="text-sm text-gray-500">{appointment.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="hidden group-hover:block text-red-500 hover:text-red-700"
                  title="Delete appointment"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No appointments booked yet</p>
        )}
      </div>
    </div>
  );
};

export default BookedAppointments;