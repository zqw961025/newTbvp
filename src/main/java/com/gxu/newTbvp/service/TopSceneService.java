package com.gxu.newTbvp.service;

import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.entity.Scene;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TopSceneService {

    public List<Log> getTopScene();
    public Scene getSceneInfo(int sceneId);
    public List<Log> getSearchTopScene(String sceneCity);
    public Scene getSearchSceneInfo(int sceneId);
}

