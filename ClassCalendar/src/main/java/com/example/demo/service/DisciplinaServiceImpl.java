package com.example.demo.service;

import com.example.demo.model.Disciplina;
import com.example.demo.repository.DisciplinaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisciplinaServiceImpl implements DisciplinaService{
    
    @Autowired
    private DisciplinaRepository disciplinaRepository;
    
    @Override
    public List<Disciplina> listaDisciplinas(){
        return disciplinaRepository.findAll();
    }
    
    @Override
    public Optional<Disciplina> getByIdDisciplina(Integer idDisciplina){
        return disciplinaRepository.findById(idDisciplina);
    }
    
    @Override
    public Disciplina salvaDisciplina(Disciplina disciplina){
        return disciplinaRepository.save(disciplina);
    }
    
    @Override
    public Disciplina atualizaDisciplina(Disciplina disciplina){
        return disciplinaRepository.save(disciplina);
    }
     
    @Override
    public void deleteByIdDisciplina (Integer idDisciplina){
        disciplinaRepository.deleteById(idDisciplina);
    }
    
}
    


