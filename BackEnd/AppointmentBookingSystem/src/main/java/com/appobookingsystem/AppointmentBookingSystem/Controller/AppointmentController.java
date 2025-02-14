package com.appobookingsystem.AppointmentBookingSystem.Controller;

import com.appobookingsystem.AppointmentBookingSystem.DTO.AppointmentDTO;
import com.appobookingsystem.AppointmentBookingSystem.Entity.Appointment;
import com.appobookingsystem.AppointmentBookingSystem.Mapper.AppointmentMapper;
import com.appobookingsystem.AppointmentBookingSystem.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public ResponseEntity<Appointment> bookAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        Appointment savedAppointment = appointmentService.bookAppointment(appointmentDTO);
        return ResponseEntity.ok(savedAppointment);
    }
    //get available time slots: but this return all the books time slots and disable should handle in the front end
    @GetMapping("/slots")
    public ResponseEntity<Map<String, String>> getBookedSlots() {
        Map<String, String> bookedSlots = appointmentService.getAllBookedSlots();
        return ResponseEntity.ok(bookedSlots);
    }

    //get slots by username
    @GetMapping("/user/{username}")
    public ResponseEntity<List<Appointment>> getAppointmentsByUsername(@PathVariable String username) {
        try {
            List<Appointment> appointments = appointmentService.getAppointmentsByUsername(username);
            if (appointments.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(appointments);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    //delete appointment
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable int id, @RequestParam String username) {
        try {
            appointmentService.deleteAppointment(id, username);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }



}
