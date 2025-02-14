package com.appobookingsystem.AppointmentBookingSystem.Mapper;

import com.appobookingsystem.AppointmentBookingSystem.DTO.UserDTO;
import com.appobookingsystem.AppointmentBookingSystem.Entity.User;

public class UserMapper {
    public static User mapToUser(UserDTO userDTO) {
        return new User(userDTO.getId(), userDTO.getUsername(), userDTO.getPassword());
    }

    public static UserDTO mapToUserDTO(User user) {
        return new UserDTO(user.getId(), user.getUsername(), user.getPassword());
    }
}
