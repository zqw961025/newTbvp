package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.entity.Route;
import com.gxu.newTbvp.entity.Scene;
import com.gxu.newTbvp.service.LogService;
import com.gxu.newTbvp.service.RouteService;
import com.gxu.newTbvp.service.SceneService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class LogController {
    @Resource
    private LogService logService;
    @Resource
    private RouteService routeService;

    @Resource
    private SceneService sceneService;

    @RequestMapping(value = "/getTopRoute",method= RequestMethod.GET)
    public Object getTopRoute(){

        List<Log> log =  logService.getTopRoute();
        Map<String,List<Route>> map=new HashMap<>();
        List<Route> topRoute = new ArrayList<>();
        for(int i=0; i<log.size(); i++){
            topRoute.add(routeService.getRoute(Integer.parseInt(log.get(i).getProductId())));
        }
        map.put("topRoute",topRoute);
        return map;

    }
    @RequestMapping(value = "/getTopScene",method= RequestMethod.GET)
    public Object getTopScene(){
        List<Log> log =  logService.getTopScene();
        Map<String,List<Scene>> map=new HashMap<>();
        List<Scene> topScene = new ArrayList<>();
        for(int i=0; i<log.size(); i++){
            topScene.add(sceneService.getScene(Integer.parseInt(log.get(i).getProductId())));
        }
        map.put("topScene",topScene);
        return map;

    }
}
