package com.appobookingsystem.AppointmentBookingSystem.Repository;

import com.appobookingsystem.AppointmentBookingSystem.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface AppointmentRepo extends JpaRepository<Appointment,Integer> {

        @Query("SELECT new map(a.date as date, a.time as time) FROM Appointment a")
        List<Map<String, String>> findAllDateAndTime();

        List<Appointment> findByUsername(String username);



}
