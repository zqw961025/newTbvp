package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.User;
import com.gxu.newTbvp.service.UserService;
import com.gxu.newTbvp.utils.Encode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * @author zqw
 * @create 2018-09-11 21:17
 * @desc
 **/
@RestController
@Slf4j
public class LoginController {

    @Resource
    private UserService userService;

    @GetMapping(value = "/test01")
    public String test01() {
        String info = "测试01";
        log.info(info);
        return info;
    }

    @GetMapping(value = "/test02")
    public String test02() {
        String info = "test02";
        log.info(info);
        return info;
    }

    /**
     * 登录逻辑
     * @param userName 用户名
     * @param pwd 用户密码
     * @param request
     * @return
     */
    @GetMapping(value = "/login")
    public Object login(
            @RequestParam(value = "userName") String userName,
            @RequestParam(value = "password") String pwd,
            HttpServletRequest request
    ) {
        String info = "登录逻辑";
        log.info(info);
        System.out.println(userName);
        User user = userService.selectUserByUsername(userName);
        System.out.println(user.getUserAge());
        if(user!=null){
            System.out.println(pwd);
            String enPassword = Encode.str2SHA256(pwd);
            if(user.getPassword().equals(pwd)){
                request.getSession().setAttribute("userInfo", user.getUserId());
                info = "登录成功";
            }else {
                info = "登录失败";
            }

        }else {
            info = "登录失败";
        }

        // 登录认证，认证成功后将用户信息放到session中
//        if (userName.equals("fury") && pwd.equals("111111")) {
//            HttpSession session = request.getSession(true);
//            session.setAttribute("userInfo",name);
//            request.getSession().setAttribute("userInfo", userName + " - " + pwd);
//            info = "登录成功";
//        } else {
//            info = "登录失败";
//        }
        log.info(info);
        Map<String,String> loginInfoMap = new HashMap<>();
        loginInfoMap.put("loginInfo",info);
        return loginInfoMap;
    }

    /**
     * 登出操作
     * @param request
     * @return
     */
    @GetMapping(value = "/loginout")
    public String loginout(HttpServletRequest request) {
        String info = "登出操作";
        log.info(info);
        HttpSession session = request.getSession();

        // 将用户信息从session中删除
        session.removeAttribute("userInfo");

        Object userInfo = session.getAttribute("userInfo");
        if (userInfo == null) {
            info = "登出成功";
        } else {
            info = "登出失败";
        }
        log.info(info);

        return info;

    }

    @RequestMapping("/getSession")
    public Object getSession(HttpServletRequest request){
        HttpSession session = request.getSession();
        Object userInfo = session.getAttribute("userInfo");
        System.out.println("获取session");
        System.out.println(userInfo);
        Map<String, Object> sessionMap = new HashMap<>();
        sessionMap.put("userInfo",userInfo);
        return sessionMap;
    }




}