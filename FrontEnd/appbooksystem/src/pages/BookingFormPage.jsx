import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bookAppointment } from '../service/BookingHanding';

const BookingFormPage = () => {
  const { date, time } = useParams();
  const navigate = useNavigate();
  const username = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    date: date,
    time: time,
    username: username
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      console.log('Form Data Before Submission:', formData);
      await bookAppointment(formData);
      console.log('Booking submitted:', { ...formData});
      navigate('/'); // Navigate to success page
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
          Book Appointment
        </h2>
        
        {/* Selected DateTime Display */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8 border border-indigo-100">
          <h3 className="text-xl font-semibold mb-3 text-indigo-700">
            Selected Time Slot
          </h3>
          <p className="text-gray-800 text-lg">
            Date: <span className="font-medium">{date}</span>
          </p>
          <p className="text-gray-800 text-lg">
            Time: <span className="font-medium">{time}</span>
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label 
              htmlFor="phone" 
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone}</p>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label 
              htmlFor="description" 
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Additional Notes
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 text-base font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormPage;