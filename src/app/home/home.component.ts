import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


      
  products:Product[] = [];



  constructor(private dataService: DataService) { }

  ngOnInit() {
     

    this.retrieveAll();
      
  }

  retrieveAll(): void { 
    this.dataService.sendGetRequest().subscribe({
        next: prods => {
            this.products = prods;
           console.log(prods);
        },
        error: err => console.log('Error', err) 
    })
}

}
