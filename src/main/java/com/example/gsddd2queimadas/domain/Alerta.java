package com.example.gsddd2queimadas.domain;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Alerta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataHora;
    private String severidade;
    private String mensagem;
    private String status;

    @ManyToOne
    @JoinColumn(name = "ponto_foco_id")
    private PontoFoco pontoFoco;

    // Um alerta pode estar associado a um PontoFoco OU um Sensor, dependendo da granularidade
    // @ManyToOne
    // @JoinColumn(name = "sensor_id")
    // private Sensor sensor;

    public Alerta() {
    }

    public Alerta(LocalDateTime dataHora, String severidade, String mensagem, String status, PontoFoco pontoFoco) {
        this.dataHora = dataHora;
        this.severidade = severidade;
        this.mensagem = mensagem;
        this.status = status;
        this.pontoFoco = pontoFoco;
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public String getSeveridade() {
        return severidade;
    }

    public void setSeveridade(String severidade) {
        this.severidade = severidade;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public PontoFoco getPontoFoco() {
        return pontoFoco;
    }

    public void setPontoFoco(PontoFoco pontoFoco) {
        this.pontoFoco = pontoFoco;
    }
} 