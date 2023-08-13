package com.example.demo.service;

import com.example.demo.model.Aluno;
import java.util.List;
import java.util.Optional;


public interface AlunoService {
    
    public List<Aluno> listaAlunos();
    
    public Optional<Aluno> getByIdAluno(Integer idAluno);
    
    public Aluno salvaAluno(Aluno aluno);
    
    public Aluno atualizaAluno(Aluno aluno);
    
    public void deleteByIdAluno(Integer idAluno);
}
