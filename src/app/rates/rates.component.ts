import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items/items.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
  providers: [ItemsService]
})
export class RatesComponent implements OnInit {

  
  currentStockList: any
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getCurrentStockDetails();
  }

  getCurrentStockDetails(){
    this.itemsService.getCurrentStockDetails().subscribe(res => {
      this.currentStockList =  res;
    });
  }


}
