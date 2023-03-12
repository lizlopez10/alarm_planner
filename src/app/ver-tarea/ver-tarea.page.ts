import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.page.html',
  styleUrls: ['./ver-tarea.page.scss'],
})
export class VerTareaPage implements OnInit {

  constructor(private alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      
      message: `<div class='warning'>
                  <img src="../../assets/Vectorwarning.png" alt="g-maps" style="border-radius: 2px">
                  <p>¿Estás seguro que deseas eliminar la tarea?</p>
                </div>
                `,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'aceptar',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
  cerrar(){

  }
}
