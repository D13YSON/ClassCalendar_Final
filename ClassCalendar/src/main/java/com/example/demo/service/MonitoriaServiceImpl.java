package com.example.demo.service;

import com.example.demo.model.Monitoria;
import com.example.demo.repository.MonitoriaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MonitoriaServiceImpl implements MonitoriaService {
    
    @Autowired
    private MonitoriaRepository monitoriaRepository;
    
    @Override
    public List<Monitoria> listaMonitorias(){
        return monitoriaRepository.findAll();
    }
    
    @Override
    public Optional<Monitoria> getByIdMonitoria(Integer idMonitoria){
        return monitoriaRepository.findById(idMonitoria);
    }
    
    @Override
    public Monitoria salvaMonitoria(Monitoria monitoria){
        return monitoriaRepository.save(monitoria);
    }
    
    @Override
    public Monitoria atualizaMonitoria(Monitoria monitoria){
        return monitoriaRepository.save(monitoria);
    }
    
    @Override
    public void deleteByIdMonitoria(Integer idMonitoria){
        monitoriaRepository.deleteById(idMonitoria);
    }
}
