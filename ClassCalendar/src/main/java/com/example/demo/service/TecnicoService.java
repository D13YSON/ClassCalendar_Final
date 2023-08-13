package com.example.demo.service;

import com.example.demo.model.Tecnico;
import java.util.List;
import java.util.Optional;


public interface TecnicoService {
    
    public List<Tecnico> listaTecnicos();
    
    public Optional<Tecnico> getByIdTecnico(Integer idTecnico);
    
    public Tecnico salvaTecnico(Tecnico tecnico);
    
    public Tecnico atualizaTecnico(Tecnico tecnico);
    
    public void deleteByIdTecnico(Integer idTecnico);
}
