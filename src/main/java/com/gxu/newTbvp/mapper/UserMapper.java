package com.gxu.newTbvp.mapper;


import com.gxu.newTbvp.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    public User selectUserByUsername(String userName);

    public List<User> getAllUser();

    //注册用户
    public int newUser(@Param("user") User user);
}
