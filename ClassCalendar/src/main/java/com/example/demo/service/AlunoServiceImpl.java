package com.example.demo.service;

import com.example.demo.model.Aluno;
import com.example.demo.repository.AlunoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlunoServiceImpl implements AlunoService{
  
    @Autowired
    private AlunoRepository alunoRepository;
    
    @Override
    public List<Aluno> listaAlunos(){
        return alunoRepository.findAll();
    }
    
    @Override
    public Optional<Aluno> getByIdAluno(Integer idAluno) {
        return alunoRepository.findById(idAluno);
    }
   
    @Override
    public Aluno salvaAluno(Aluno aluno) {
        return alunoRepository.save(aluno);
    }
    
    @Override
    public Aluno atualizaAluno(Aluno aluno) {
        return alunoRepository.save(aluno);
    }
    
    @Override
    public void deleteByIdAluno(Integer idAluno) {
        alunoRepository.deleteById(idAluno);
    }
}