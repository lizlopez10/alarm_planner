import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  styleUrls: ['./lista-tareas.page.scss'],
})
export class ListaTareasPage implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  showTasks = false;
  date: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');


  ngOnInit() {
    console.log('deateee')
    console.log(this.date)
    console.log(this.currentDate)
  }

}
