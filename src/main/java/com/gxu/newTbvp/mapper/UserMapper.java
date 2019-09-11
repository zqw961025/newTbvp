package com.gxu.newTbvp.mapper;


import com.gxu.newTbvp.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    public User selectUserByUsername(String userName);
}
