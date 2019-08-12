package com.gxu.newTbvp.service.Impl;


import com.gxu.newTbvp.entity.Route;
import com.gxu.newTbvp.mapper.RouteMapper;
import com.gxu.newTbvp.service.RouteService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;

@Service("routeService")
public class RouteServiceImpl implements RouteService {


    @Resource
    private RouteMapper routeMapper;

    @Override
    public  Route getRoute(int id){
        return routeMapper.getRoute(id);
    }

    @Override
    public List<Route> getRouteByStartAndStop(String routeStart, String routeStop){
        return routeMapper.getRouteByStartAndStop(routeStart,routeStop);
    }

    @Override
    public List<Route> getRouteByTime( String routeTime){
        return routeMapper.getRouteByTime(routeTime);
    }
}
