import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PortfolioGridListComponent } from './portfolio-grid-list/portfolio-grid-list.component';

@NgModule({
  declarations: [
    PortfolioGridListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PortfolioGridListComponent]
})
export class AppModule { }
