package com.gxu.newTbvp.service.Impl;


import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.mapper.LogMapper;
import com.gxu.newTbvp.service.LogService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("logService")
public class LogServiceImpl implements LogService {


    @Resource
    private LogMapper logMapper;

    @Override
    public List<Log> getTopRoute(){
        return logMapper.getTopRoute();
    }

    @Override
    public List<Log> getTopScene(){ return logMapper.getTopScene(); }

    @Override
    public List<Log> getSceneByCity(String sceneCity){
        return logMapper.getSceneByCity(sceneCity);
    }

}
