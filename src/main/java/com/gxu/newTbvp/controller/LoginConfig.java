package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.controller.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author zqw
 * @create 2018-09-11 21:35
 * @desc
 **/
@Configuration
public class LoginConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/recommend")
                .excludePathPatterns("login")
                .excludePathPatterns("index")
                .excludePathPatterns("loginIndex")
                .excludePathPatterns("keywords")
                .excludePathPatterns("/getSession");
    }
}