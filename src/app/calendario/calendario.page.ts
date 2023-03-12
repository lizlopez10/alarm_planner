import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Console } from 'console';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  date: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  currentDate= formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  ngOnInit() {
  }
  onChange($event:any) {
    console.log($event);
  }
  passedDate(){
    this.navCtrl.navigateForward("nueva-tarea");
  }

}
