package com.gxu.newTbvp.service;

import com.github.pagehelper.PageInfo;
import com.gxu.newTbvp.entity.Route;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RouteService {

    public Route getRoute(int id);

    public List<Route> getRouteByStartAndStop(String routeStart, String routeStop);

    public List<Route> getRouteByTime( String routeTime);

    public List<Route> getRouteByStart( String routeStart);

    public List<Route> getRouteByStop(String routeStop);

}
