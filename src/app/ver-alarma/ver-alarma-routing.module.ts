import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAlarmaPage } from './ver-alarma.page';

const routes: Routes = [
  {
    path: '',
    component: VerAlarmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAlarmaPageRoutingModule {}
