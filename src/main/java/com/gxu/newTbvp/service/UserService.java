package com.gxu.newTbvp.service;


import com.gxu.newTbvp.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public User selectUserByUsername(String userName);
    //获取全部用户
    public List<User> getAllUser();

    public int newUser(@Param("user") User user);
}
