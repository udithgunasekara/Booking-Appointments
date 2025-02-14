package com.appobookingsystem.AppointmentBookingSystem.Mapper;

import com.appobookingsystem.AppointmentBookingSystem.DTO.AppointmentDTO;
import com.appobookingsystem.AppointmentBookingSystem.Entity.Appointment;

public class AppointmentMapper {
    public static AppointmentDTO toDTO(Appointment appointment) {
        AppointmentDTO appointmentDTO = new AppointmentDTO();
        appointmentDTO.setId(appointment.getId());
        appointmentDTO.setName(appointment.getName());
        appointmentDTO.setEmail(appointment.getEmail());
        appointmentDTO.setDescription(appointment.getDescription());
        appointmentDTO.setPhone(appointment.getPhone());
        appointmentDTO.setDate(appointment.getDate());
        appointmentDTO.setTime(appointment.getTime());
        appointmentDTO.setUsername(appointment.getUsername());
        return appointmentDTO;
    }

    public static Appointment toEntity(AppointmentDTO appointmentDTO) {
        Appointment appointment = new Appointment();
        appointment.setId(appointmentDTO.getId());
        appointment.setName(appointmentDTO.getName());
        appointment.setEmail(appointmentDTO.getEmail());
        appointment.setDescription(appointmentDTO.getDescription());
        appointment.setPhone(appointmentDTO.getPhone());
        appointment.setDate(appointmentDTO.getDate());
        appointment.setTime(appointmentDTO.getTime());
        appointment.setUsername(appointmentDTO.getUsername());
        return appointment;
    }
}
