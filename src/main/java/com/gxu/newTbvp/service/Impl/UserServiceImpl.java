package com.gxu.newTbvp.service.Impl;

import com.gxu.newTbvp.entity.User;
import com.gxu.newTbvp.mapper.UserMapper;
import com.gxu.newTbvp.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public User selectUserByUsername(String userName){
        return userMapper.selectUserByUsername(userName);
    }

    //获取全部用户
    @Override
    public List<User> getAllUser() {
        return userMapper.getAllUser();
    }

    @Override
    public int newUser(@Param("user") User user){
        return userMapper.newUser(user);
    }
}
