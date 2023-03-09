import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  step: number = 1;
  name: string = '';
  selectedimage:string='';
  roomName:string='';
  noOfPlayers:string='';
  constructor() {}
}
