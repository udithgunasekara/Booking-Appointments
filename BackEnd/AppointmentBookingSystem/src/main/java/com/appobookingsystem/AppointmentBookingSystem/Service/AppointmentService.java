package com.appobookingsystem.AppointmentBookingSystem.Service;

import com.appobookingsystem.AppointmentBookingSystem.DTO.AppointmentDTO;
import com.appobookingsystem.AppointmentBookingSystem.Entity.Appointment;

import java.util.List;
import java.util.Map;

public interface AppointmentService {
    Appointment bookAppointment(AppointmentDTO appointmentDTO);
    Map<String, String> getAllBookedSlots();
    List<Appointment> getAppointmentsByUsername(String username);
    void deleteAppointment(int id, String username);

}
