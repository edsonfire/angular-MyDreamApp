import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  
  constructor(private dataService: DataService) { }

  ngOnInit() {
     


      
  }


}
