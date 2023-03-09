import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test';
  
  constructor (public dataService:DataService ){}
  ngOnInit(): void {
    setTimeout(() => {
      this.dataService.step = 2;
    }, 2000);
  }

  nextStep() {
    this.dataService.step += 1;
  }
  preStep(){
    if(this.dataService.step >1){
      this.dataService.step -=1;
    }
  }
}
