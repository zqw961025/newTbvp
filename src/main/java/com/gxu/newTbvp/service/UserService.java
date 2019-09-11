package com.gxu.newTbvp.service;


import com.gxu.newTbvp.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User selectUserByUsername(String userName);
}
