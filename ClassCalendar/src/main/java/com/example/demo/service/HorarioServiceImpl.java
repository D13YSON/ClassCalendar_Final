package com.example.demo.service;

import com.example.demo.model.Horario;
import com.example.demo.repository.HorarioRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HorarioServiceImpl implements HorarioService {
    
    @Autowired
    private HorarioRepository horarioRepository;
    
    @Override
    public List<Horario>listaHorarios(){
        return horarioRepository.findAll();
    }
    
    @Override
    public Optional<Horario> getByIdHorario(Integer idHorario){
        return horarioRepository.findById(idHorario);
    }
    
    @Override
    public Horario salvaHorario(Horario horario){
        return horarioRepository.save(horario);
    }
    
    @Override
    public Horario atualizaHorario(Horario horario){
        return horarioRepository.save(horario);
    }
    
    @Override
    public void deleteByIdHorario(Integer idHorario){
        horarioRepository.deleteById(idHorario);
    }
}
