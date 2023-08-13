import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoPage } from './tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoPageRoutingModule {}
