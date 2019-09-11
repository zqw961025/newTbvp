package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.Route;
import com.gxu.newTbvp.service.RouteService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class RouteController {

    @Resource
    private RouteService routeService;

    @RequestMapping(value="/searchRoute",method= RequestMethod.GET)
    public Object searchRoute(HttpServletRequest request, @RequestParam String start, @RequestParam String stop, @RequestParam String startDay, @RequestParam String stopDay){

        List<Route> routes = routeService.getRouteByStart(start);
        List<Route> finalRoutes = new ArrayList<>();
        for (int i=0;i<routes.size();i++){
            if(routes.get(i).getRouteStop().equals(stop)){
                finalRoutes.add(routes.get(i));
            }
            else {
                List<Route> midRoutes = routeService.getRouteByStart(routes.get(i).getRouteStop());
                for (int j=0;j<midRoutes.size();j++){
                    if(midRoutes.get(j).getRouteStop().equals(stop)){
                        String citys = routes.get(i).getRouteCitys()+midRoutes.get(j).getRouteCitys().substring(2);
                        String name = routes.get(i).getRouteName()+"-"+midRoutes.get(j).getRouteName();
                        String price = String.valueOf(Double.parseDouble(routes.get(i).getRoutePrice())+Double.parseDouble(midRoutes.get(j).getRoutePrice()));
                        String time = String.valueOf(Integer.parseInt(routes.get(i).getRouteTime())+Integer.parseInt(midRoutes.get(j).getRouteTime()));
                        midRoutes.get(j).setRouteCitys(citys);
                        midRoutes.get(j).setRouteName(name);
                        midRoutes.get(j).setRoutePrice(price);
                        midRoutes.get(j).setRouteTime(time);
                        finalRoutes.add(midRoutes.get(j));
                    }
//                    else if(!(midRoutes.get(j).getRouteStop().equals(start))) {
//                        List<Route> midRoutes1 = routeService.getRouteByStart(midRoutes.get(j).getRouteStop());
//                        for (int k=0;k<midRoutes1.size();k++){
//                            if(midRoutes1.get(k).getRouteStop().equals(stop)){
//                                String citys = routes.get(i).getRouteCitys()+midRoutes.get(j).getRouteCitys().substring(2)+midRoutes1.get(k).getRouteCitys().substring(2);
//                                midRoutes1.get(k).setRouteCitys(citys);
//                                finalRoutes.add(midRoutes1.get(k));
//                            }
//                        }
//                    }
                }
            }
        }
        Map<String,List<Route>> map=new HashMap<>();
        map.put("finalRoutes",finalRoutes.subList(0,4));
        System.out.println(finalRoutes);
        return map;
    }

    @RequestMapping(value="/recommend",method= RequestMethod.GET)
    public Object recommend(){
        return null;
    }


}
