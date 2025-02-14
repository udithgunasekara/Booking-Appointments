package com.appobookingsystem.AppointmentBookingSystem.Service.Imp;

import com.appobookingsystem.AppointmentBookingSystem.DTO.AppointmentDTO;
import com.appobookingsystem.AppointmentBookingSystem.Entity.Appointment;
import com.appobookingsystem.AppointmentBookingSystem.Mapper.AppointmentMapper;
import com.appobookingsystem.AppointmentBookingSystem.Repository.AppointmentRepo;
import com.appobookingsystem.AppointmentBookingSystem.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Override
    public Appointment bookAppointment(AppointmentDTO appointmentDTO) {
        Appointment appointment = AppointmentMapper.toEntity(appointmentDTO);

        //Save the appointment to the database
        Appointment savedAppointment = appointmentRepo.save(appointment);


        return savedAppointment;
    }

    @Override
    public Map<String, String> getAllBookedSlots() {
        List<Appointment> appointments = appointmentRepo.findAll();
        Map<String, String> dateTimeMap = new HashMap<>();

        for (Appointment appointment : appointments) {
            dateTimeMap.put(appointment.getTime(), appointment.getDate());
        }
        System.out.println("Here"+ dateTimeMap);

        return dateTimeMap;
    }

    @Override
    public List<Appointment> getAppointmentsByUsername(String username) {
        return appointmentRepo.findByUsername(username);
    }

    @Override
    public void deleteAppointment(int id, String username)  {
        appointmentRepo.deleteById(id);
    }
}
