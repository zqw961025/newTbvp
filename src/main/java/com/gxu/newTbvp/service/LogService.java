package com.gxu.newTbvp.service;


import com.gxu.newTbvp.entity.Log;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LogService {

    public List<Log> getTopRoute();

    public List<Log> getTopScene();

    public List<Log> getSceneByCity(String sceneCity);

}
