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
@Table (name = "tecnico")
public class Tecnico implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "id_tecnico")
    private Integer idTecnico;
    
    @Column (name = "cpf")
    private String cpf;
    
    @Column (name = "nome")
    private String nome;
    
    @Column (name = "telefone")
    private String telefone;
    
    @Column (name = "endereco")
    private String endereco;
    
    @Column (name = "status")
    private Boolean  status;
    
    @Column (name = "senha")
    private String  senha;
    
    public Tecnico() {
    }

    public Tecnico(Integer idTecnico, String cpf, String nome, String telefone, String endereco, Boolean status, String senha) {
        this.idTecnico = idTecnico;
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.status = status;
        this.senha = senha;
    }
  
    public Integer getIdTecnico() {
        return idTecnico;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    @Override
    public String toString() {
        return "Tecnico{" + "idTecnico=" + idTecnico + ", cpf=" + cpf + ", nome=" + nome + ", telefone=" + telefone + ", endereco=" + endereco + ", status=" + status + ", senha=" + senha + '}';
    }

   
}
