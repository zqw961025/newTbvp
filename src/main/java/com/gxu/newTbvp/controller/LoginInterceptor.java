package com.gxu.newTbvp.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author 钟庆伟
 * @create 2018-09-11 21:31
 * @desc 登录状态拦截器
 **/
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        log.info("==========登录状态拦截");

        HttpSession session = request.getSession();
        log.info("sessionId为：" + session.getId());

        // 获取用户信息，如果没有用户信息直接返回提示信息
        Object userInfo = session.getAttribute("userInfo");
        System.out.println(userInfo);
        if (userInfo == null) {
            log.info("没有登录");
//            String url = "loginIndex";
//            response.sendRedirect(url);
            response.getWriter().write("< script language=javascript>window.location.href='loginIndex.html'< /script>");
            return false;
        } else {
            log.info("已经登录过啦，用户信息为：" + session.getAttribute("userInfo"));
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception ex) throws Exception {

    }

}
