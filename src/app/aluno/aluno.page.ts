import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  itens : any = []
  public usuario: any
  public userType:any
  userGroup:any = 'aluno'

  constructor(private route: ActivatedRoute, private alertController: AlertController, private NavCtrl:NavController, private service: BuscaDadosService, private excluirALuno: DeletarService ) { }

  public irAlunoDetalhe(aluno: any){
    this.NavCtrl.navigateForward('aluno-detalhe',{
      queryParams: { aluno: aluno, usuario: this.usuario, userType:this.userType}
    })
  }
  
  public async excluirAluno(aluno: any){
    await this.exibirAlerta(aluno.nome +' excluido, por favor, atualize a pagina');
    this.excluirALuno.deleteUsuarios(this.userGroup,aluno.idAluno).then((aluno)=>{

      console.log("delete")
      this.getAllDados();
    })

  }
public getAllDados () {
  this.service.getAllDados (this.userGroup + 's').then(dados=>{
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


  ngOnInit() {
    this.getAllDados()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
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
  }
}
