package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.StockTransferKila;
import com.example.demo.service.StockTransferKilaService;

@RestController
@RequestMapping("/api/stock-transfers")
public class StockTransferKilaController {
    @Autowired
    private StockTransferKilaService stockTransferService;

    @PostMapping
    public ResponseEntity<Void> transferQrCards(@RequestBody List<String> referenceIds) {
        stockTransferService.transferQrCards(referenceIds);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<StockTransferKila> getAllStockTransfers() {
        return stockTransferService.getAllStockTransfers();
    }
}