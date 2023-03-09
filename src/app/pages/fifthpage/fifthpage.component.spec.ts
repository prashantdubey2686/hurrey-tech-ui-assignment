import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthpageComponent } from './fifthpage.component';

describe('FifthpageComponent', () => {
  let component: FifthpageComponent;
  let fixture: ComponentFixture<FifthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
