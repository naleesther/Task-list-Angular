import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
[x: string]: any;
  title = 'angular-task_list-system';
  displayElement = false;

  ngOnInit(){
    const cat = localStorage.getItem('myCat');
    
    // localStorage.setItem('task_data', this.task_data.Task_Array);

  }

  constructor( public task_data : DataServiceService){}

}
