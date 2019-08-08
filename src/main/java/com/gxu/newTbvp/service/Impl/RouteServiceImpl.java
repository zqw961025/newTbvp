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
}
