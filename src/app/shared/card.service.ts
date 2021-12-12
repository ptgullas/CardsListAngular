import { Injectable } from '@angular/core';
import { Card } from '../shared/card.model';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  list: Card[] = [];

  constructor() { }
}
