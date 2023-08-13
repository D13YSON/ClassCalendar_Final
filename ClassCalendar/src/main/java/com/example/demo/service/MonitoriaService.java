package com.example.demo.service;

import com.example.demo.model.Monitoria;
import java.util.List;
import java.util.Optional;

public interface MonitoriaService {
    
    public List<Monitoria> listaMonitorias();
    
    public Optional<Monitoria> getByIdMonitoria(Integer idMonitoria);
    
    public Monitoria salvaMonitoria(Monitoria monitoria);
    
    public Monitoria atualizaMonitoria(Monitoria monitoria);
    
    public void deleteByIdMonitoria(Integer idMonitoria);
    
}
