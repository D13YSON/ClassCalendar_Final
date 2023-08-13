package com.example.demo.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity 
@Table (name ="horario_disciplina")

public class Horario implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "id_horario_disciplina")
    private Integer idHorario;
    
    @Column (name = "mes")
    private Integer mes;
    
    @Column (name = "dia")
    private Integer dia;
    
    @Column (name = "horario_inicio")
    private Integer horarioInicio;
    
    @Column (name = "horario_fim")
    private Integer horarioFim;
    
    @Column (name = "disponivel")
    private Boolean disponivel;
    
    @ManyToOne
    @JoinColumn (name = "id_disciplina ", referencedColumnName = "id_disciplina")
    private Disciplina disciplina;
    
    public Horario() {
    }

    public Horario(Integer idHorario, Integer mes, Integer dia, Integer horarioInicio, Integer horarioFim, Boolean disponivel, Disciplina disciplina) {
        this.idHorario = idHorario;
        this.mes = mes;
        this.dia = dia;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.disponivel = disponivel;
        this.disciplina = disciplina;
    }

    public Integer getIdHorario() {
        return idHorario;
    }

    public Integer getMes() {
        return mes;
    }

    public Integer getDia() {
        return dia;
    }

    public Integer getHorarioInicio() {
        return horarioInicio;
    }

    public Integer getHorarioFim() {
        return horarioFim;
    }

    public Boolean getDisponivel() {
        return disponivel;
    }

    public Disciplina getDisciplina() {
        return disciplina;
    }

    public void setMes(Integer mes) {
        this.mes = mes;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

    public void setHorarioInicio(Integer horarioInicio) {
        this.horarioInicio = horarioInicio;
    }

    public void setHorarioFim(Integer horarioFim) {
        this.horarioFim = horarioFim;
    }

    public void setDisponivel(Boolean disponivel) {
        this.disponivel = disponivel;
    }

    @Override
    public String toString() {
        return "Horario{" + "idHorario=" + idHorario + ", mes=" + mes + ", dia=" + dia + ", horarioInicio=" + horarioInicio + ", horarioFim=" + horarioFim + ", disponivel=" + disponivel + ", disciplina=" + disciplina + '}';
    }
    
}