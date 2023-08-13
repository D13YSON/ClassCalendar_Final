package com.example.demo.repository;

import com.example.demo.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository <Aluno, Integer>{

    public static class findAll{
        
        public findAll(){
            
        }
    }
    
    
    
    
}
