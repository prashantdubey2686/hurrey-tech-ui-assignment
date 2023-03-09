import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css'],
})
export class SecondpageComponent {
  constructor(public dataService: DataService) {}

  nextStep() {
    this.dataService.step += 1;
  }
}
