package com.example.demo.controller;

import com.example.demo.model.Professor;
import com.example.demo.service.ProfessorService;
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
@CrossOrigin(origins = "http://localhost:8100")
public class ProfessorController {
    
     @Autowired
     private ProfessorService professorService;

     @GetMapping("/professores")
     @ApiOperation("Listar todos os professores")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
     public ResponseEntity <List<Professor>> listaProfessores (){
         return ResponseEntity.status (HttpStatus.OK). body(professorService.listaProfessores()); 
    }    
    
    @GetMapping ("professor/{id_professor}")
    @ApiOperation("Listar um professor por id")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Optional<Professor>> getByIdProfessor (@PathVariable Integer id_professor){
        return ResponseEntity.status(HttpStatus.OK).body(professorService.getByIdProfessor(id_professor));
    }
    
    @PostMapping("professor")
    @ApiOperation("Cadastrar um professor")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Professor> salvaProfessor (@RequestBody Professor professor){
        return ResponseEntity.status(HttpStatus.CREATED).body(professorService.salvaProfessor(professor));
    } 
    
    @PutMapping("professor")
    @ApiOperation("Atualizar um professor")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<Professor> atualizaProfessor (@RequestBody Professor professor){
        return ResponseEntity.status(HttpStatus.OK).body(professorService.atualizaProfessor(professor));
    }
    
    @DeleteMapping("professor/{id_professor}")
    @ApiOperation("Remover um professor")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Requisição realizada com sucesso"),
        @ApiResponse(code = 404, message = "Falha na requisição")
    })
    public ResponseEntity<String> deleteByIdProfessor(@PathVariable Integer id_professor){
        professorService.deleteByIdProfessor(id_professor);
        return ResponseEntity.status(HttpStatus.OK).body("Professor removido com sucesso!");
    }
}
