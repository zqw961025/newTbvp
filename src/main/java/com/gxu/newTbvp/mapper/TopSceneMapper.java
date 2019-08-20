package com.gxu.newTbvp.mapper;

import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.entity.Scene;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TopSceneMapper {
    public List<Log> getTopScene();
    public Scene getSceneInfo(int sceneId);
    public List<Log> getSearchTopScene(String sceneCity);
    public Scene getSearchSceneInfo(int sceneId);

}
