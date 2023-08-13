package com.example.demo.repository;

import com.example.demo.model.Monitoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonitoriaRepository extends JpaRepository <Monitoria, Integer>{

    public static class findAll{
        
        public findAll(){
            
        }
    }
    
}
