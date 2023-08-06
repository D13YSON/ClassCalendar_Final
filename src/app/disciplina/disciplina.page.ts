import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from '../api/cadastro.service';
import { DeletarService } from '../api/deletar.service';
import { BuscaDadosService } from '../api/busca-dados.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
})
export class DisciplinaPage implements OnInit {

  public professor: any;
  public usuario: any
  public userType:any
  idProfessor:any
  disciplinaType:any = 'disciplina';
  materia:any;
  itens:any = [];

  constructor(private alertController: AlertController, private navCtrl: NavController, private route: ActivatedRoute, private service: CadastroService, private exclusaoMateria : DeletarService, private serviceMaterias: BuscaDadosService) { }

  public adicionarMateria() {
    let newObj: any = {
      materia : this.materia,
      professor : {
        idProfessor: this.professor.idProfessor
      }
    };
    
    this.service.postMateria(newObj, this.disciplinaType).then((newObj) => {
      console.log(newObj)
      this.materia = ''
      this.getAll();
    })
  }

  public async excluirMateria(materia: any) {
    await this.exibirAlerta(materia.materia +' excluido, por favor, atualize a pagina');
    this.exclusaoMateria.deleteDados(this.disciplinaType, materia.idDisciplina).then(() => {
      this.getAll();
    })
  }
 
  public getAll(){
    this.serviceMaterias.getAll(this.disciplinaType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }
  
  async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goHome(){
    this.navCtrl.navigateForward('home', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  ngOnInit() {
    this.getAll();
    this.route.queryParams.subscribe(params => {
      this.professor = params['professor'];
      this.usuario = params['usuario'];
      this.userType = params['userType'];
    });
  }

}
