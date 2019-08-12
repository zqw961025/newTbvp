package com.gxu.newTbvp.mapper;


import com.gxu.newTbvp.entity.Log;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LogMapper {
    /**
     * 获取前三的热门路线
     */

    public List<Log> getTopRoute();

    public List<Log> getTopScene();


}