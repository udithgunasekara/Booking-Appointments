import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = new Date();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1));
  };

  const handleDateClick = (day) => {
    navigate(`/slots/${currentYear}-${currentMonth + 1}-${day}`);
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isPastDate = (day) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    return dateToCheck < new Date(today.setHours(0, 0, 0, 0));
  };

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={previousMonth}
            className="p-2 hover:bg-indigo-100 rounded-lg transition-colors duration-200 text-indigo-600 text-xl font-bold"
          >
            ←
          </button>
          <h2 className="text-2xl font-bold text-indigo-800">
            {months[currentMonth]} {currentYear}
          </h2>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-indigo-100 rounded-lg transition-colors duration-200 text-indigo-600 text-xl font-bold"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
       
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div 
              key={day} 
              className="text-center font-semibold text-indigo-600 text-sm py-2"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="p-2"></div>
          ))}

          {days.map(day => (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={isPastDate(day)}
              className={`
                p-2 w-full aspect-square rounded-lg text-center text-sm font-medium
                transition-all duration-200 
                ${isToday(day) 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : isPastDate(day)
                    ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                    : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 active:scale-95'
                }
              `}
            >
              {day}
            </button>
          ))}
        </div>


        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-100 mr-2"></div>
            <span>Past Dates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;