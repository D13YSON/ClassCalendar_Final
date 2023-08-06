import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicoPageRoutingModule } from './tecnico-routing.module';

import { TecnicoPage } from './tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicoPageRoutingModule
  ],
  declarations: [TecnicoPage]
})
export class TecnicoPageModule {}
