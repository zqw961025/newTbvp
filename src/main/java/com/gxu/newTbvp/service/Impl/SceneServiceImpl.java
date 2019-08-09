package com.gxu.newTbvp.service.Impl;


import com.gxu.newTbvp.entity.Scene;
import com.gxu.newTbvp.mapper.SceneMapper;
import com.gxu.newTbvp.service.SceneService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("sceneService")
public class SceneServiceImpl implements SceneService {
    @Resource
    private SceneMapper sceneMapper;

    @Override
    public  Scene getScene(int id){
        return sceneMapper.getScene(id);

    }
}
