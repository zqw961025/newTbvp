package com.gxu.newTbvp.controller;

import com.gxu.newTbvp.entity.Log;
import com.gxu.newTbvp.entity.Scene;
import com.gxu.newTbvp.service.TopSceneService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HotController {

    @Resource
    private TopSceneService topSceneService;


    @RequestMapping("/topScene")
    public Object topScene(){
        List<Log> topLog = topSceneService.getTopScene();
        List<Scene> sceneInfo = new ArrayList<>();
        for( int i=0;i<topLog.size();i++){
            sceneInfo.add(topSceneService.getSceneInfo(Integer.parseInt(topLog.get(i).getProductId())));
        }
        Map<String,List<Scene>> topSceneMap = new HashMap<>();
        topSceneMap.put("sceneInfo",sceneInfo);
        return topSceneMap;
    }

    @RequestMapping("/searchTopScene")
    public Object searchTopScene(HttpServletRequest request, @RequestParam String sceneCity){
        System.out.println(sceneCity);
        List<Log> topLog = topSceneService.getSearchTopScene(sceneCity);
        List<Scene> searchSceneInfo = new ArrayList<>();
        for( int i=0;i<topLog.size();i++){
            searchSceneInfo.add(topSceneService.getSearchSceneInfo(Integer.parseInt(topLog.get(i).getProductId())));
        }
        Map<String,List<Scene>> searchTopSceneMap = new HashMap<>();
        searchTopSceneMap.put("searchSceneInfo",searchSceneInfo);
        return searchTopSceneMap;

    }
}
