package com.gxu.newTbvp.service;

import com.gxu.newTbvp.entity.Scene;
import org.springframework.stereotype.Service;

@Service
public interface SceneService {
    public Scene getScene(int id);
}
