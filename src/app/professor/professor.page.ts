import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessorPage implements OnInit {

  itens : any = []
  public usuario:any
  userGroup: any = 'professor'
  public button: any
  public userType: any

  constructor(private NavCtrl:NavController, private alertController: AlertController, private service: BuscaDadosService, private excluirProfessor: DeletarService, private route:ActivatedRoute ) { }
 
  public irProfessorDetalhe(professor: any){
    this.NavCtrl.navigateForward('professor-detalhe',{
      queryParams: { professor: professor, usuario: this.usuario, userType: this.userType }
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


  public async deletarProfessor(professor: any){
    await this.exibirAlerta(professor.nome +' excluido, por favor, atualize a pagina');
    this.excluirProfessor.deleteUsuarios(this.userGroup,professor.idProfessor).then((professor)=>{

      console.log("delete")
      this.getAllDados();
    })
  }

  public getAllDados () {
    this.service.getAllDados (this.userGroup + 'es').then(dados=>{
      this.itens = dados;
      console.log(this.itens)
    })

}

  public irDisciplina(professor: any){
    this.NavCtrl.navigateForward('disciplina',{
      queryParams: { professor: professor, usuario: this.usuario, userType: this.userType }
    })
  }

ngOnInit() {
  this.getAllDados()
  this.route.queryParams.subscribe(params => {
    this.usuario = params['usuario'];
    this.userType = params['userType']
    this.button = params ['button']
  });
}
goHome(){
  this.NavCtrl.navigateForward('home', {
    queryParams:  { usuario: this.usuario,
                  userType: this.userType }
  });
}

goPerfil(){
  this.NavCtrl.navigateForward('perfil', {
    queryParams: { usuario: this.usuario,
                   userType: this.userType }
  });
}}
