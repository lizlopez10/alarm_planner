import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCategoriasPageRoutingModule } from './lista-categorias-routing.module';

import { ListaCategoriasPage } from './lista-categorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCategoriasPageRoutingModule
  ],
  declarations: [ListaCategoriasPage]
})
export class ListaCategoriasPageModule {}
