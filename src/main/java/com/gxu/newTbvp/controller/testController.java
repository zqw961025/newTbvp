package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.Route;
import com.gxu.newTbvp.entity.Scene;
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
    @RequestMapping("/test")
    public String test(){
        Route test = routeService.getRoute(1);
        Scene scene = sceneService.getScene(1);
        System.out.println(test.getRouteCitys());
        System.out.println(scene.getSceneCity());
        return "hello";
    }
}
