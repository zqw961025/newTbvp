package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.Route;
import com.gxu.newTbvp.service.RouteService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class testController {
    @Resource
    private RouteService routeService;
    @RequestMapping("/test")
    public String test(){
        Route test = routeService.getRoute(1);
        System.out.println(test.getRouteCitys());
        return "hello";
    }
}
