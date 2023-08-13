package com.example.demo.service;

import com.example.demo.model.Disciplina;
import java.util.List;
import java.util.Optional;

public interface DisciplinaService {
    
    public List<Disciplina> listaDisciplinas();
    
    public Optional<Disciplina> getByIdDisciplina (Integer idDisciplina);
    
    public Disciplina salvaDisciplina(Disciplina disciplina);
    
    public Disciplina atualizaDisciplina(Disciplina disciplina);
    
    public void deleteByIdDisciplina(Integer idDisciplina);
}
