package com.foodandhunger.backend.repository;

import com.foodandhunger.backend.models.RecipientModel;
import com.foodandhunger.backend.models.RequestModel;
import com.foodandhunger.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RequestRepo extends JpaRepository<RequestModel, Integer> {
    List<RecipientModel> findByLocation(String location);

}
