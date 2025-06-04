package com.example.gsddd2queimadas.domain;

import java.time.LocalDateTime;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;

@Entity
public class Relatorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataGeracao;
    private LocalDateTime periodoInicio;
    private LocalDateTime periodoFim;
    private String conteudo;

    @ManyToMany
    @JoinTable(
        name = "relatorio_ocorrencia",
        joinColumns = @JoinColumn(name = "relatorio_id"),
        inverseJoinColumns = @JoinColumn(name = "ocorrencia_id")
    )
    private List<Ocorrencia> ocorrencias;

    public Relatorio() {
    }

    public Relatorio(LocalDateTime dataGeracao, LocalDateTime periodoInicio, LocalDateTime periodoFim, String conteudo, List<Ocorrencia> ocorrencias) {
        this.dataGeracao = dataGeracao;
        this.periodoInicio = periodoInicio;
        this.periodoFim = periodoFim;
        this.conteudo = conteudo;
        this.ocorrencias = ocorrencias;
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getDataGeracao() {
        return dataGeracao;
    }

    public void setDataGeracao(LocalDateTime dataGeracao) {
        this.dataGeracao = dataGeracao;
    }

    public LocalDateTime getPeriodoInicio() {
        return periodoInicio;
    }

    public void setPeriodoInicio(LocalDateTime periodoInicio) {
        this.periodoInicio = periodoInicio;
    }

    public LocalDateTime getPeriodoFim() {
        return periodoFim;
    }

    public void setPeriodoFim(LocalDateTime periodoFim) {
        this.periodoFim = periodoFim;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public List<Ocorrencia> getOcorrencias() {
        return ocorrencias;
    }

    public void setOcorrencias(List<Ocorrencia> ocorrencias) {
        this.ocorrencias = ocorrencias;
    }
} 