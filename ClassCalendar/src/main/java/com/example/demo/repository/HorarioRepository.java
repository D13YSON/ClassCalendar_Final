package com.example.demo.repository;

import com.example.demo.model.Horario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HorarioRepository extends JpaRepository<Horario, Integer> {
    public static class findAll{
    
        public findAll(){
        }
    }
}
