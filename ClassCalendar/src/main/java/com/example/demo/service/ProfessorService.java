package com.example.demo.service;

import com.example.demo.model.Professor;
import java.util.List;
import java.util.Optional;


public interface ProfessorService {
    
    public List<Professor> listaProfessores();

    public Optional<Professor> getByIdProfessor(Integer idProfessor);

    public Professor salvaProfessor (Professor professor);

    public Professor atualizaProfessor (Professor professor);

    public void deleteByIdProfessor (Integer idProfessor);
}
