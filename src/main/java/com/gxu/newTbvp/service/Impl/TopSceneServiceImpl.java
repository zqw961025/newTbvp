package com.gxu.newTbvp.service.Impl;

import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.entity.Scene;
import com.gxu.newTbvp.mapper.TopSceneMapper;
import com.gxu.newTbvp.service.TopSceneService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service("topSceneService")
public class TopSceneServiceImpl implements TopSceneService{

    @Resource
    private TopSceneMapper topSceneMapper;

    public List<Log> getTopScene(){
        return topSceneMapper.getTopScene();

    }
    public Scene getSceneInfo(int sceneId){
        return topSceneMapper.getSceneInfo(sceneId);

    }

    public List<Log> getSearchTopScene(String sceneCity){
        return topSceneMapper.getSearchTopScene(sceneCity);
    }
    public Scene getSearchSceneInfo(int sceneId){
        return topSceneMapper.getSearchSceneInfo(sceneId);
    }

}
