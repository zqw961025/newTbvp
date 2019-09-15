package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.User;
import com.gxu.newTbvp.service.UserService;
import com.gxu.newTbvp.utils.Encode;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Iterator;
import java.util.Map;

@Controller
public class RegisterController {
    @Resource
    private UserService userService;
    //用户注册审核
    @PostMapping("/registerCheck")
    public String registerCheck(@RequestParam("username") String username,
                                @RequestParam("password1") String password1,
                                @RequestParam("password2") String password2,
                                Map<String, Object> map,
                                HttpSession session) {

        if (!password1.equals(password2)){
            map.put("msg", "两次输入的密码不匹配");
            return "register";
        }

        //判断用户是否已经存在
        Iterator<User> iterator = userService.getAllUser().iterator();
        while (iterator.hasNext()) {
            if (iterator.next().getUserName().equals(username)) {
                map.put("msg", "用户已存在！");
                return "register";
            }
        }
        //新建用户实例，进行用户注册。密码经过SHA256进行哈希。
//        User user = new User(username, Encode.str2SHA256(password1));
        User user = new User(username, password1);
        userService.newUser(user);
        map.put("msg", "注册成功");
        return "loginIndex";
    }
}
