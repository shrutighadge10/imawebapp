package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.InwardCCN;

@Repository
public interface InwardCCNRepository extends JpaRepository<InwardCCN, Long> {
    
}
