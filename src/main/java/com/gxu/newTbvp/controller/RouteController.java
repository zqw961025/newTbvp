package com.gxu.newTbvp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@Controller
public class RouteController {
    @RequestMapping(value="/searchRoute",method= RequestMethod.POST)
    public String searchRoute(HttpServletRequest request, @RequestParam String start, @RequestParam String stop, @RequestParam String startDay, @RequestParam String stopDay){
        System.out.println(startDay);
        return "index";
    }


}
