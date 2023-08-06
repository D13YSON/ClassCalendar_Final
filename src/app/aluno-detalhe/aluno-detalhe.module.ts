import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoDetalhePageRoutingModule } from './aluno-detalhe-routing.module';

import { AlunoDetalhePage } from './aluno-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoDetalhePageRoutingModule
  ],
  declarations: [AlunoDetalhePage]
})
export class AlunoDetalhePageModule {}
