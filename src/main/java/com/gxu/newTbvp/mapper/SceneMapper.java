package com.gxu.newTbvp.mapper;

import com.gxu.newTbvp.entity.Scene;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SceneMapper {
    public Scene getScene(int id);

    public List<Scene> getSceneByCity(String sceneCity);

}