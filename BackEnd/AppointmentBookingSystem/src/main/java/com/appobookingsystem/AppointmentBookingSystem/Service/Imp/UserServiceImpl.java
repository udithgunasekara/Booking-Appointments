package com.appobookingsystem.AppointmentBookingSystem.Service.Imp;

import com.appobookingsystem.AppointmentBookingSystem.Entity.User;
import com.appobookingsystem.AppointmentBookingSystem.Repository.UserRepo;
import com.appobookingsystem.AppointmentBookingSystem.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public boolean login(String username, String password) {
        User user = userRepo.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    @Override
    public boolean register(String username, String password) {
        if (userRepo.findByUsername(username) != null) {
            return false;  // Username already exists
        }

        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);  // Storing plain-text password

        userRepo.save(newUser);
        return true; // Registration successful
    }
}
