import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.page.html',
  styleUrls: ['./tecnico.page.scss'],
})
export class TecnicoPage implements OnInit {

  itens : any = []
  lista:any = []
  public usuario: any
  public userType:any
  userGroup:any = 'tecnico'
  constructor(private NavCtrl:NavController,private alertController: AlertController, private route: ActivatedRoute, private service: BuscaDadosService, private excluirTecnico: DeletarService) { }

  public irTecnicoDetalhe(tecnico: any){
    this.NavCtrl.navigateForward('tecnico-detalhe',{
      queryParams: { tecnico: tecnico, 
        usuario: this.usuario,
        userType: this.userType }
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
  async erroTecnico (){
     const alert = await this.alertController.create({
       header: 'Não é possível excluir o último usuário !',
       buttons: ['OK']
     });
   
     await alert.present();
   }

  public async deletarTecnico(tecnico: any){
     this.lista = await this.service.getAllDados('tecnicos');
     if (this.lista.length>1){
          await this.exibirAlerta(tecnico.nome +' excluido, por favor, atualize a pagina');
          this.excluirTecnico.deleteUsuarios(this.userGroup,tecnico.idTecnico).then((tecnico)=>{
      
            console.log("delete")
            this.getAllDados();
          })
     }
     else{
        this.erroTecnico()
     }
  }

  public getAllDados () {
    this.service.getAllDados (this.userGroup + 's').then(dados=>{
      this.itens = dados;
      console.log(this.itens)
    })

}

  ngOnInit() {
    this.getAllDados()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});}
          
     
  goPerfil(){
    this.NavCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goHome(){
    this.NavCtrl.navigateForward('home', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }}
