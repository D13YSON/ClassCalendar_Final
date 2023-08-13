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
@Table(name= "monitoria")

public class Monitoria implements Serializable{
   @Id
   @GeneratedValue (strategy = GenerationType.IDENTITY)
   @Column (name = "id_monitoria")
   private Integer idMonitoria;
  
   @Column (name ="estado")
   private Boolean estado;
  
   @Column (name = "feedback")
   private String feedback;
   
   @ManyToOne 
   @JoinColumn (name = "id_aluno", referencedColumnName = "id_aluno")
   private Aluno aluno;    
   
   @ManyToOne
   @JoinColumn (name = "id_horario_disciplina", referencedColumnName = "id_horario_disciplina")
   private Horario horario;
   
   public Monitoria() {
   }

   public Monitoria(Integer idMonitoria, Boolean estado, String feedback, Aluno aluno, Horario horario) {
       this.idMonitoria = idMonitoria;
       this.estado = estado;
       this.feedback = feedback;
       this.aluno = aluno;
       this.horario = horario;
   }

   public Integer getIdMonitoria() {
       return idMonitoria;
   }

   public Boolean getEstado() {
       return estado;
   }

   public void setEstado(Boolean estado) {
       this.estado = estado;
   }

   public String getFeedback() {
       return feedback;
   }

   public void setFeedback(String feedback) {
       this.feedback = feedback;
   }

   public Aluno getAluno() {
       return aluno;
   }

   public void setAluno(Aluno aluno) {
       this.aluno = aluno;
   }

   public Horario getHorario() {
       return horario;
   }

   public void setHorario(Horario horario) {
       this.horario = horario;
   }

   @Override
   public String toString() {
       return "Monitoria{" + "idMonitoria=" + idMonitoria + ", estado=" + estado + ", feedback=" + feedback + ", aluno=" + aluno + ", horario=" + horario + '}';
   }
    
}