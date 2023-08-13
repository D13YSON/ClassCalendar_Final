package com.example.demo.service;

import com.example.demo.model.Horario;
import java.util.List;
import java.util.Optional;

public interface HorarioService {
    public List<Horario> listaHorarios();
    
    public Optional<Horario>getByIdHorario(Integer idHorario);
    
    public Horario salvaHorario(Horario horario);
    
    public Horario atualizaHorario (Horario horario);
    
    public void deleteByIdHorario(Integer idHorario);
}
