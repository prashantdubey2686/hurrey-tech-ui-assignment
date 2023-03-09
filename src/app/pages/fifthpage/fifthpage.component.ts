import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-fifthpage',
  templateUrl: './fifthpage.component.html',
  styleUrls: ['./fifthpage.component.css']
})
export class FifthpageComponent {
  constructor(public dataService: DataService) {}

  nextStep() {
   
    this.dataService.step += 1;
  }
}
