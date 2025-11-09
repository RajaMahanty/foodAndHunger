package com.foodandhunger.backend.controller;

import com.foodandhunger.backend.models.RequestModel;
import com.foodandhunger.backend.services.RequestService;
import com.foodandhunger.backend.structures.ControllerStruct;
import com.foodandhunger.backend.utils.LLogging;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/request")
public class RequestController  implements ControllerStruct<RequestModel> {
    @Autowired
    RequestService requestService;

    @Override
    @PostMapping("/add")
    public ResponseEntity<String> create(RequestModel entity) {
        LLogging.info("create()");
        try{
            boolean save = requestService.create(entity);
            if (save){
                LLogging.info("request added successfully");
                return ResponseEntity.ok("Request added successfully");
            }
        }catch (Exception e){
            LLogging.info("something went wrong: " + e.getMessage());
            return ResponseEntity.status(401).body( e.getMessage());
        }
        return null;
    }

    @Override
    public ResponseEntity<RequestModel> get(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<RequestModel>> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<RequestModel> update(RequestModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<RequestModel>> search(String query) {
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
