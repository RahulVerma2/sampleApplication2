import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import { AppSettings} from '../../app.config';

@Injectable()
export class PurchaseService {

  constructor(private http: Http) { }

  addTodaysPurchase(todaysVegetablePurchase){
    return this.http.post(AppSettings.API_ENDPOINT+'addTodaysPurchase', todaysVegetablePurchase);
  }

}
