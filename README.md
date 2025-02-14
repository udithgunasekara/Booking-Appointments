# Appointment Booking System

A modern, user-friendly appointment booking system built with React, Spring boot and tailwind that enables seamless scheduling through an intuitive time slot selection interface.

## Overview

This application provides a complete appointment booking solution with an interactive calendar, time slot management, and user-friendly booking forms. Built using React and styled with Tailwind CSS, it offers a responsive and accessible scheduling experience
Users can register or login to the site to view and booking appoinments

## Note:
Based on the project requirements and complexity, I decided to useParam and the useLocation hook (React Router DOM) for data pass, instead of using the Context API and Props drilling.

## Technology Stack

- React for the frontend architecture
- Tailwind CSS for responsive styling
- React Router DOM for navigation
- Spring boot for backend
- MySQL to Database

## Core Features

### Interactive Calendar
### Time Slot Management
### Booking System
### User Account Creation

## Setup Instructions
1. Clone the repository locally.
2. Note the project structure:
   - **Backend:** Located in `Backned/AppointmentBookingSystem` (Spring Boot).
   - **Frontend:** Located in `frontend/appbooksystem` (React).
3. For the backend:
   - Check the `application.properties` file to ensure the database link is correctly configured. For example:
     ```properties
     jdbc:mysql://127.0.0.1:3306/Appointment_DB?createDatabaseIfNotExist=true
     ```
4. For the frontend:
   - Run `npm install` to install dependencies.
   - Run `npm start dev`.

5. Verify Cross-Origin Resource Sharing (CORS) settings:
   - Ensure the backend CORS configuration matches the frontend project. If necessary, update the `CorsConfig` file (Config > CorsConfig):
     ```java
     "http://localhost:5173", "http://127.0.0.1:5173"
     ```

## Future Enhancements
Authentication System
1. Implement Spring Security with BCrypt password encryption
2. Implement JWT (JSON Web Token) for session management

