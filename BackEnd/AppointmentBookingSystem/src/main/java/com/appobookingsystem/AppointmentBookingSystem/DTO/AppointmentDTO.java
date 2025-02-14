package com.appobookingsystem.AppointmentBookingSystem.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDTO {
    private int id;
    private String name;
    private String email;
    private String description;
    private String phone;
    private String date;
    private String time;
    private String username;


}


