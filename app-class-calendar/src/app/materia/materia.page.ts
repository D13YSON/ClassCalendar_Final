import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { CadastroService } from '../api/cadastro.service';
import { ActivatedRoute } from '@angular/router';
import { BuscaDadosService } from '../api/busca-dados.service';
import { DeletarService } from '../api/deletar.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.page.html',
  styleUrls: ['./materia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MateriaPage implements OnInit {

  public materia: any
  public professor:any
  public usuario:any
  public userType:any
  disponivel : any
  horarioFim: any
  horarioInicio: any
  dia:any
  mes:any
  idDisciplina:any
  itens:any = []
  materias:any = []
  horarioType:any = 'horario'

  constructor(private alertController: AlertController, private exclusaoHorario: DeletarService, private route: ActivatedRoute, private navCtrl: NavController, private service: CadastroService, private allHorarios: BuscaDadosService) { }

  public salvaHorario(){
    let newObj:any = {    
      disponivel   : true,
      horarioFim : this.horarioFim,
      horarioInicio  : this.horarioInicio,
      dia : this.dia,
      mes: this.mes,
      disciplina: {
        idDisciplina: this.materia.idDisciplina
      }
    };
    
    this.service.postHorario(newObj, this.horarioType).then((newObj) => {
      console.log(newObj)
      this.mes = ''
      this.dia = ''
      this.horarioInicio = ''
      this.horarioFim = ''
      this.getAll();
    })
  }

  public getAll(){
    this.allHorarios.getAll(this.horarioType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  formatarHorario(horarioNumerico: number): string {
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }
  
  public async excluirHorario(horario: any) {
    await this.exibirAlerta('horario excluido, por favor, atualize a pagina');
    this.exclusaoHorario.deleteDados(this.horarioType, horario.idHorario).then(() => {
      this.getAll();
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
      this.materia = params['materia'];
      this.usuario = params['usuario'];
      this.userType = params['userType'];
    });
  }
}
