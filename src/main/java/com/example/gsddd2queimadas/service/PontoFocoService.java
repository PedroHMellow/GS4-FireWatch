package com.example.gsddd2queimadas.service;

import com.example.gsddd2queimadas.domain.PontoFoco;
import com.example.gsddd2queimadas.repository.PontoFocoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PontoFocoService {

    private final PontoFocoRepository pontoFocoRepository;

    @Autowired
    public PontoFocoService(PontoFocoRepository pontoFocoRepository) {
        this.pontoFocoRepository = pontoFocoRepository;
    }

    public PontoFoco save(PontoFoco pontoFoco) {
        return pontoFocoRepository.save(pontoFoco);
    }

    public List<PontoFoco> findAll() {
        return pontoFocoRepository.findAll();
    }
} 