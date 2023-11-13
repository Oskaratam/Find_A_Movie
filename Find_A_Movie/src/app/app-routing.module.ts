import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './first-section/results/description/description.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'description/:movieId', component: DescriptionComponent, data: { animation: "topSlide" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
