package com.example.gsddd2queimadas.domain;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Ocorrencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataHoraInicio;
    private LocalDateTime dataHoraFim;
    private String tipo;
    private String status;
    private Double areaAfetada;

    @ManyToOne
    @JoinColumn(name = "alerta_id")
    private Alerta alerta;

    @ManyToOne
    @JoinColumn(name = "agente_ambiental_id")
    private AgenteAmbiental agenteAmbiental;

    public Ocorrencia() {
    }

    public Ocorrencia(LocalDateTime dataHoraInicio, LocalDateTime dataHoraFim, String tipo, String status, Double areaAfetada, Alerta alerta, AgenteAmbiental agenteAmbiental) {
        this.dataHoraInicio = dataHoraInicio;
        this.dataHoraFim = dataHoraFim;
        this.tipo = tipo;
        this.status = status;
        this.areaAfetada = areaAfetada;
        this.alerta = alerta;
        this.agenteAmbiental = agenteAmbiental;
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getDataHoraInicio() {
        return dataHoraInicio;
    }

    public void setDataHoraInicio(LocalDateTime dataHoraInicio) {
        this.dataHoraInicio = dataHoraInicio;
    }

    public LocalDateTime getDataHoraFim() {
        return dataHoraFim;
    }

    public void setDataHoraFim(LocalDateTime dataHoraFim) {
        this.dataHoraFim = dataHoraFim;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getAreaAfetada() {
        return areaAfetada;
    }

    public void setAreaAfetada(Double areaAfetada) {
        this.areaAfetada = areaAfetada;
    }

    public Alerta getAlerta() {
        return alerta;
    }

    public void setAlerta(Alerta alerta) {
        this.alerta = alerta;
    }

    public AgenteAmbiental getAgenteAmbiental() {
        return agenteAmbiental;
    }

    public void setAgenteAmbiental(AgenteAmbiental agenteAmbiental) {
        this.agenteAmbiental = agenteAmbiental;
    }
} 