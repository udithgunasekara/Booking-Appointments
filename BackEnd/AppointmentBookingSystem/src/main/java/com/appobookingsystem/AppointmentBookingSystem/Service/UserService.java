package com.appobookingsystem.AppointmentBookingSystem.Service;

public interface UserService {
    boolean login(String username, String password);

    boolean register(String username, String password);


}
