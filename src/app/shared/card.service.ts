import { Injectable } from '@angular/core';
import { Card } from '../shared/card.model';
import { CARDS } from '../mock-cards';
import { CARDDETAILS } from '../mock-cards';
import { CardDetail } from './card-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  list: Card[] = [];
  detailsList: CardDetail[] = [];

  styleNames: string[] = ['orangered', 'orange', 'gold', 'darkorange']

  constructor() { }

  refreshList() {
    this.list = CARDS;
    this.detailsList = CARDDETAILS;

    this.list.forEach(c => {
      c.styleName = this.getRandomStyle();
    })
  }
  getCardDetails(id: number) : CardDetail {
    var detail = this.detailsList.find(dl => dl.id == id);
    if (detail != null) {return detail;}
    else throw new Error(`Can't find Card Detail with ${id}`);
    ;
  }

  getRandomStyle() : string {
    const random = Math.floor(Math.random() * this.styleNames.length);
    return this.styleNames[random];
  }


}
