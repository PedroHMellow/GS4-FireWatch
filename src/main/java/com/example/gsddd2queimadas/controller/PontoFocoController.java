package com.example.gsddd2queimadas.controller;

import com.example.gsddd2queimadas.domain.PontoFoco;
import com.example.gsddd2queimadas.service.PontoFocoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pontosfoco")
public class PontoFocoController {

    private final PontoFocoService pontoFocoService;

    @Autowired
    public PontoFocoController(PontoFocoService pontoFocoService) {
        this.pontoFocoService = pontoFocoService;
    }

    @PostMapping
    public ResponseEntity<PontoFoco> createPontoFoco(@RequestBody PontoFoco pontoFoco) {
        PontoFoco savedPontoFoco = pontoFocoService.save(pontoFoco);
        return new ResponseEntity<>(savedPontoFoco, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PontoFoco>> getAllPontosFoco() {
        List<PontoFoco> pontosFoco = pontoFocoService.findAll();
        return ResponseEntity.ok(pontosFoco);
    }
} 