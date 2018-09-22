import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import { AppSettings} from '../../app.config';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  getCurrentStockDetails(){
    return this.http.get(AppSettings.API_ENDPOINT+'getCurrentStockDetails');
  }
}
