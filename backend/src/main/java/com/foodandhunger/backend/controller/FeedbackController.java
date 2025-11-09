package com.foodandhunger.backend.controller;

import com.foodandhunger.backend.models.FeedbackModel;
import com.foodandhunger.backend.structures.ControllerStruct;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/feedback")
public class FeedbackController implements ControllerStruct<FeedbackModel> {
    @Override
    public ResponseEntity<String> create(FeedbackModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<FeedbackModel> get(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<FeedbackModel>> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<FeedbackModel> update(FeedbackModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<FeedbackModel>> search(String query) {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> exists(int id) {
        return null;
    }
}
