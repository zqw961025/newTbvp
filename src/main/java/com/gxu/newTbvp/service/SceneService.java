package com.gxu.newTbvp.service;

import com.gxu.newTbvp.entity.Scene;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SceneService {
    public Scene getScene(int id);

}
