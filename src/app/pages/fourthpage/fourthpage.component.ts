import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-fourthpage',
  templateUrl: './fourthpage.component.html',
  styleUrls: ['./fourthpage.component.css'],
})
export class FourthpageComponent {
  constructor(public dataService: DataService) {
  }

  nextStep() {
   
    this.dataService.step += 1;
  }
}
