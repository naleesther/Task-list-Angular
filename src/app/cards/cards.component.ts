import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  disableSelect = new FormControl(false);

  tasks: any =[]
  ngOnInit(){
    // console.log(this.task_data.getTask());
    // this.tasks = this.task_data.getTask();
    // console.log("data", this.tasks);
                                             
    
  }

  constructor(public dialog: MatDialog , private task_data:DataServiceService ){}
  open_task_dialog(): void {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'800px',
      height:'600px'
    })

  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }
  topping = new FormControl('');

  toppingList: string[] = ['Any', 'Yesterday','This week', 'This month','Custom'];

  toppingsList: string[] = ['Any', 'Today','Yesterday','This week','This Month','Custom'];
}
