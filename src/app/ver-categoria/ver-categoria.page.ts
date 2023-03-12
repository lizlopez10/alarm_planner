import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.page.html',
  styleUrls: ['./ver-categoria.page.scss'],
})
export class VerCategoriaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      
      message: `<div class='warning'>
                  <img src="../../assets/Vectorwarning.png" alt="g-maps" style="border-radius: 2px">
                  <p>¿Estás seguro que deseas eliminar la categoría?</p>
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

}
