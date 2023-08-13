import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorDetalhePageRoutingModule } from './professor-detalhe-routing.module';

import { ProfessorDetalhePage } from './professor-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorDetalhePageRoutingModule
  ],
  declarations: [ProfessorDetalhePage]
})
export class ProfessorDetalhePageModule {}
