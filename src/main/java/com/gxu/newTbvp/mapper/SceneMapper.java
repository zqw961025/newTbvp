package com.gxu.newTbvp.mapper;

import com.gxu.newTbvp.entity.Scene;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SceneMapper {
    public Scene getScene(int id);
}