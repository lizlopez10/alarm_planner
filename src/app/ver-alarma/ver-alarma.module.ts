import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAlarmaPageRoutingModule } from './ver-alarma-routing.module';

import { VerAlarmaPage } from './ver-alarma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAlarmaPageRoutingModule
  ],
  declarations: [VerAlarmaPage]
})
export class VerAlarmaPageModule {}
