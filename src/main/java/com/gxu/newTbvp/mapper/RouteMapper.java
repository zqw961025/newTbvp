package com.gxu.newTbvp.mapper;

import com.gxu.newTbvp.entity.Route;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface RouteMapper  {
    public Route getRoute(int id);
}