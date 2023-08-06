import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoDetalhePage } from './tecnico-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoDetalhePageRoutingModule {}
