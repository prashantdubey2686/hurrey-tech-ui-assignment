import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css'],
})
export class ThirdpageComponent {
  constructor(public dataService: DataService) {}
  nextStep() {
    this.dataService.step += 1;
  }
  selectimage(selimg: string) {
    this.dataService.selectedimage = selimg;
  }
}
