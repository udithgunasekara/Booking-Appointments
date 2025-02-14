import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSlots } from "../service/BookingHanding";

const Slots = () => {
  const { date } = useParams();
  const navigate = useNavigate();
  const [bookedSlots, setBookedSlots] = useState(new Map());

  const getAllBookedSlots = async () => {
    try {
      const response = await fetchSlots();
      console.log("API Response:", response.data);

      if (response.data && typeof response.data === "object") {
        const slotsMap = new Map(Object.entries(response.data));
        setBookedSlots(slotsMap);
      } else {
        console.error("Unexpected API response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  useEffect(() => {
    getAllBookedSlots();
  }, []);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      const formattedHour = hour > 12 ? hour - 12 : hour;
      const amPm = hour >= 12 ? "PM" : "AM";
      slots.push(`${formattedHour}:00 ${amPm}`);
    }
    return slots;
  };

  const isSlotBooked = (slot) => {
    return bookedSlots.has(slot) && bookedSlots.get(slot) === date;
  };

  const handleSlotSelect = (slot) => {
    console.log(`You have booked a slot for ${date} at ${slot}`);
    navigate(`/book/${date}/${slot}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">
            Available Time Slots
          </h2>
          <p className="text-xl text-gray-600">
            Date: <span className="font-semibold">{date}</span>
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-indigo-100 mr-2"></div>
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-red-200 mr-2"></div>
            <span className="text-gray-600">Booked</span>
          </div>
        </div>

        {/* Time Slots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {generateTimeSlots().map((slot) => (
            <button
              key={slot}
              className={`
                p-6 rounded-xl text-lg font-medium transition-all duration-200
                ${
                  isSlotBooked(slot)
                    ? "bg-red-200 text-red-800 cursor-not-allowed opacity-75"
                    : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:shadow-md active:transform active:scale-95"
                }
              `}
              onClick={() => handleSlotSelect(slot)}
              disabled={isSlotBooked(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-gray-500">
          <p>Click on an available time slot to proceed with booking</p>
        </div>
      </div>
    </div>
  );
};

export default Slots;