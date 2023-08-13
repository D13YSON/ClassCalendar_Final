package com.example.demo.repository;

import com.example.demo.model.Tecnico;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TecnicoRepository extends JpaRepository <Tecnico, Integer>{
    
    public static class findAll{
        
        public findAll(){
            
        }
    }
}
