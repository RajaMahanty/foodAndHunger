package com.foodandhunger.backend.services;

import com.foodandhunger.backend.models.RequestModel;
import com.foodandhunger.backend.repository.RequestRepo;
import com.foodandhunger.backend.structures.ServicesStruct;
import com.foodandhunger.backend.utils.LLogging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestService implements ServicesStruct<RequestModel> {

    @Autowired
    RequestRepo requestRepo;

    @Override
    public Optional<RequestModel> getById(int id) {
        LLogging.info("getById()");
        try {
            Optional<RequestModel> existing = requestRepo.findById(id);
            existing.ifPresentOrElse(
                    d -> LLogging.info("Request found: " + d.getTitle()),
                    () -> LLogging.warn("Request not found, id: " + id));
            return existing;
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public List<RequestModel> getAll() {
        LLogging.info("getAll()");
        try {
            List<RequestModel> allRequests = requestRepo.findAll();
            if (allRequests.isEmpty()) {
                LLogging.warn("No requests found");
            } else {
                LLogging.info("Fetched " + allRequests.size() + " requests");
            }
            return allRequests;
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return List.of();
        }
    }

    @Override
    public boolean updateById(int id, RequestModel entity) {
        LLogging.info("updateById()");
        try {
            RequestModel existing = requestRepo.findById(id)
                    .orElseThrow(() -> new RuntimeException("Request not found"));
            existing.setDescription(entity.getDescription());
            existing.setType(entity.getType());
            existing.setTitle(entity.getTitle());
            existing.setLocation(entity.getLocation());
            existing.setAddress(entity.getAddress());
            requestRepo.save(existing);
            return true;
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean create(RequestModel entity) {
        LLogging.info("create()");
        try {
            requestRepo.save(entity);
            LLogging.info("Request saved: " + entity.getTitle());
            return true;
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean delete(int id) {
        LLogging.info("delete()");
        try {
            if (!requestRepo.existsById(id)) {
                LLogging.warn("Request not found, cannot delete");
                return false;
            }
            requestRepo.deleteById(id);
            LLogging.info("Request deleted, id: " + id);
            return true;
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return false;
        }
    }

    @Override
    public ResponseEntity<List<RequestModel>> search(String query) {
        LLogging.info("search()");
        try {
            List<RequestModel> result = requestRepo.findByTitleContainingIgnoreCase(query);
            if (result.isEmpty()) {
                LLogging.warn("No results for query: " + query);
            } else {
                LLogging.info("Found " + result.size() + " matching results");
            }
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return ResponseEntity.status(500).build();
        }
    }

    @Override
    public ResponseEntity<Long> count() {
        LLogging.info("count()");
        try {
            long total = requestRepo.count();
            return ResponseEntity.ok(total);
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return ResponseEntity.status(500).build();
        }
    }

    @Override
    public ResponseEntity<Boolean> exists(int id) {
        LLogging.info("exists()");
        try {
            boolean exists = requestRepo.existsById(id);
            return ResponseEntity.ok(exists);
        } catch (Exception e) {
            LLogging.error(e.getMessage());
            return ResponseEntity.status(500).build();
        }
    }
}
