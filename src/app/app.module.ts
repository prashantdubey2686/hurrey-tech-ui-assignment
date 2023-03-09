import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';
import { FourthpageComponent } from './pages/fourthpage/fourthpage.component';
import { FormsModule } from '@angular/forms';
import { FifthpageComponent } from './pages/fifthpage/fifthpage.component';
import { SixthpageComponent } from './pages/sixthpage/sixthpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    FourthpageComponent,
    FifthpageComponent,
    SixthpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
