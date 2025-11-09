package com.foodandhunger.backend.controller;

import com.foodandhunger.backend.models.DonationModel;
import com.foodandhunger.backend.structures.ControllerStruct;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/donation")
public class DonationController implements ControllerStruct<DonationModel> {

    @Override
    public ResponseEntity<String> create(DonationModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<DonationModel> get(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<DonationModel>> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<DonationModel> update(DonationModel entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(int id) {
        return null;
    }

    @Override
    public ResponseEntity<List<DonationModel>> search(String query) {
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
