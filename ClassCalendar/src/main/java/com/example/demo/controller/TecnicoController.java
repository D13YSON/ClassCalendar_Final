package com.example.demo.controller;

import com.example.demo.model.Tecnico;
import com.example.demo.service.TecnicoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Api("Api Tecnicos")
@CrossOrigin(origins = "http://localhost:8100")
public class TecnicoController {
    
    @Autowired
    private TecnicoService tecnicoService;
    
    @GetMapping("/tecnicos")
    @ApiOperation("Listar todos os tecnicos")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity <List<Tecnico>> listaTecnicos(){
        return ResponseEntity.status(HttpStatus.OK). body(tecnicoService.listaTecnicos());
    }
                                                                            
    @GetMapping("tecnico/{id_tecnico}")
    @ApiOperation("Listar um tecnico por id")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Optional<Tecnico>> getByIdTecnico(@PathVariable Integer id_tecnico){
        return ResponseEntity.status(HttpStatus.OK).body(tecnicoService.getByIdTecnico(id_tecnico));  
    }
    
    @PostMapping("tecnico")
    @ApiOperation("Cadastrar um tecnico")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Tecnico> salvaTecnico(@RequestBody Tecnico tecnico){
        return ResponseEntity.status(HttpStatus.CREATED).body(tecnicoService.salvaTecnico(tecnico));
    }
    
    @PutMapping("tecnico")
    @ApiOperation("Atualizar um tecnico")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Tecnico> atualizaTecnico(@RequestBody Tecnico tecnico){
        return ResponseEntity.status(HttpStatus.OK).body(tecnicoService.atualizaTecnico(tecnico));
    }
    
    @DeleteMapping("tecnico/{id_tecnico}")
    @ApiOperation("Remover um tecnico")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<String> deleteByIdTecnico(@PathVariable Integer id_tecnico){
        tecnicoService.deleteByIdTecnico(id_tecnico);
        return ResponseEntity.status(HttpStatus.OK).body("Tecnico removido com sucesso!");
    }    
}
