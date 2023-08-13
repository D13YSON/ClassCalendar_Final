import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorDetalhePage } from './professor-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorDetalhePageRoutingModule {}
