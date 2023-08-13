package com.example.demo.service;

import com.example.demo.model.Tecnico;
import com.example.demo.repository.TecnicoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TecnicoServiceImpl implements TecnicoService{
    
    @Autowired
    private TecnicoRepository tecnicoRepository;
    
    @Override
    public List<Tecnico> listaTecnicos(){
        return tecnicoRepository.findAll();
    }
    
    @Override
    public Optional<Tecnico> getByIdTecnico(Integer idTecnico) {
        return tecnicoRepository.findById(idTecnico);
    }
   
    @Override
    public Tecnico salvaTecnico(Tecnico tecnico) {
        return tecnicoRepository.save(tecnico);
    }
    
    @Override
    public Tecnico atualizaTecnico(Tecnico tecnico) {
        return tecnicoRepository.save(tecnico);
    }
    
    @Override
    public void deleteByIdTecnico(Integer idTecnico) {
        tecnicoRepository.deleteById(idTecnico);
    }
}
