import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import SlotPage from './pages/SlotPage';
import BookingFormPage from './pages/BookingFormPage';
import Login from './pages/UserLogin';
import Register from './pages/UserReg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/slots/:date" element={<SlotPage />} />
        <Route path="/book/:date/:time" element={<BookingFormPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;