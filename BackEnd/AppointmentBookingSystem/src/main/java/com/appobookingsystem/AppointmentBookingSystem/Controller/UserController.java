package com.appobookingsystem.AppointmentBookingSystem.Controller;

import com.appobookingsystem.AppointmentBookingSystem.DTO.UserDTO;
import com.appobookingsystem.AppointmentBookingSystem.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user") // Base path for all user-related endpoints
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody UserDTO userDTO) {
        boolean isAuthenticated = userService.login(userDTO.getUsername(), userDTO.getPassword());
        return isAuthenticated ? "Success" : "Failed";
    }

    @PostMapping("/register")
    public String register(@RequestBody UserDTO userDTO) {
        boolean isRegistered = userService.register(userDTO.getUsername(), userDTO.getPassword());
        return isRegistered ? "Registration Successful" : "Username already exists";
    }
}
