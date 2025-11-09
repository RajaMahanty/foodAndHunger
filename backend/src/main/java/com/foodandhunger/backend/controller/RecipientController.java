package com.foodandhunger.backend.controller;

import com.foodandhunger.backend.models.RecipientModel;
import com.foodandhunger.backend.structures.ControllerStruct;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/recipient")
public class RecipientController implements ControllerStruct<RecipientModel> {
    @Override
    public ResponseEntity<String> create(RecipientModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<RecipientModel> get(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<RecipientModel>> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<RecipientModel> update(RecipientModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<RecipientModel>> search(String query) {
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
