package com.example.demo.service;

import com.example.demo.model.Professor;
import com.example.demo.repository.ProfessorRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessorServiceImpl implements ProfessorService {
   
    @Autowired
    private ProfessorRepository professorRepository;
    
    @Override
    public List<Professor> listaProfessores (){
        return professorRepository.findAll();
    
    }
    
    @Override
    public Optional<Professor> getByIdProfessor (Integer idProfessor) {
        return  professorRepository.findById (idProfessor);
    }
 
    @Override
    public Professor salvaProfessor (Professor professor) {
        return professorRepository.save(professor);
    }

    @Override
    public Professor atualizaProfessor (Professor professor){ 
        return professorRepository.save(professor);
    }  
   
    @Override
    public void deleteByIdProfessor (Integer idProfessor) {
        professorRepository.deleteById (idProfessor);
    }
    
}
