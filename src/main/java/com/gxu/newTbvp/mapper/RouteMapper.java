package com.gxu.newTbvp.mapper;

import com.gxu.newTbvp.entity.Route;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface RouteMapper  {

    /**
     * 根据id查询路线
     * id为路线id
     */
    public Route getRoute(int id);

    /**
     * 根据出发地和目的地查询路线
     * routeStart 为出发地
     * routeStop 为目的地
     */

    public List<Route> getRouteByStartAndStop(@Param("routeStart") String routeStart,@Param("routeStop") String routeStop);

    /**
     * 根据路线产品耗时查询路线
     * routeTime为路线耗时
     */

    public List<Route> getRouteByTime(@Param("routeTime") String routeTime);

    public List<Route> getRouteByTimeAndPlace(@Param("routeStart") String routeStart,@Param("routeStop") String routeStop,@Param("routeTime") String routeTime);

}