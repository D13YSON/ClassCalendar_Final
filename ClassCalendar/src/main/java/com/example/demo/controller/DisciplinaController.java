package com.example.demo.controller;

import com.example.demo.model.Disciplina;
import com.example.demo.service.DisciplinaService;
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
@Api("Api Diciplinas")
@CrossOrigin(origins = "http://localhost:8100")
public class DisciplinaController {
    
    @Autowired
    private DisciplinaService disciplinaService;
    
    @GetMapping("/disciplinas")
    @ApiOperation("Listar todas as disciplinas")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity <List<Disciplina>>listaDisciplinas(){
        return ResponseEntity.status(HttpStatus.OK).body(disciplinaService.listaDisciplinas());
    }
    
    @GetMapping ("disciplina/{id_disciplina}")
    @ApiOperation("Listar uma disciplina por id")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Optional<Disciplina>> getByIdDisplina(@PathVariable Integer id_disciplina){
        return ResponseEntity.status(HttpStatus.OK). body (disciplinaService.getByIdDisciplina(id_disciplina));
    }
    
    @PostMapping("disciplina")
    @ApiOperation("Cadastrar uma disciplina")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Disciplina> salvaDisciplina(@RequestBody Disciplina disciplina){
        return ResponseEntity.status(HttpStatus.CREATED).body(disciplinaService.salvaDisciplina(disciplina));
    }
    
    @PutMapping("disciplina")
    @ApiOperation("Atualizar uma disciplina")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Disciplina> atualizaDisciplina(@RequestBody Disciplina disciplina){
        return ResponseEntity.status(HttpStatus.OK).body(disciplinaService.atualizaDisciplina(disciplina));
    }
    
    @DeleteMapping("disciplina/{id_disciplina}")
    @ApiOperation("Remover uma disciplina")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
        public ResponseEntity<String> deleteByIdDisciplina(@PathVariable Integer id_disciplina){
            disciplinaService.deleteByIdDisciplina(id_disciplina);
            return ResponseEntity.status(HttpStatus.OK).body("Disciplina removida com sucesso!");
        }
}

