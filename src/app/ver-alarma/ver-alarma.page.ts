import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ver-alarma',
  templateUrl: './ver-alarma.page.html',
  styleUrls: ['./ver-alarma.page.scss'],
})
export class VerAlarmaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goVer(){
    this.navCtrl.navigateForward("ver-tarea");
  }
  goCalendario(){
    this.navCtrl.navigateForward("calendario");
  }

}
