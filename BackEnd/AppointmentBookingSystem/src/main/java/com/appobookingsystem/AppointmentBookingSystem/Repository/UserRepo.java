package com.appobookingsystem.AppointmentBookingSystem.Repository;

import com.appobookingsystem.AppointmentBookingSystem.Entity.Appointment;
import com.appobookingsystem.AppointmentBookingSystem.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface UserRepo extends JpaRepository<User, Integer> {

    User findByUsername(String username);

}