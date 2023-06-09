import { Component } from '@angular/core';



export interface Section {
  name: string;
}


interface projects {
  name: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {


  

  
  notes: Section[] = [
    {
      name: 'Home',
    },
  ]
  
  projects: Section[] = [
    {
      name: 'Projects',
    },
  ]

   

}
