package com.gxu.newTbvp.service;

import com.github.pagehelper.PageInfo;
import com.gxu.newTbvp.entity.Route;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RouteService {
    public Route getRoute(int id);
}
