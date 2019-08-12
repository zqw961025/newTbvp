package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.entity.Route;
import com.gxu.newTbvp.entity.Scene;
import com.gxu.newTbvp.service.LogService;
import com.gxu.newTbvp.service.RouteService;
import com.gxu.newTbvp.service.SceneService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class testController {
    @Resource
    private RouteService routeService;
    @Resource
    private SceneService sceneService;
    @Resource
    private LogService logService;
    @RequestMapping("/test")
    public String test(){
        List<Route> test = routeService.getRouteByStartAndStop("南宁","桂林");
        System.out.println(test);
        List<Log> test1 =  logService.getTopRoute();
        System.out.println(test1.get(0).getProductId());
        return "hello";
    }
}
