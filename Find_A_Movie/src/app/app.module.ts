import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { IntroComponent } from './intro/intro.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { OptionCardComponent } from './first-section/option-card/option-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    IntroComponent,
    FirstSectionComponent,
    OptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
