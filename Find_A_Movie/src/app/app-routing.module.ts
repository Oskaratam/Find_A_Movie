import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './first-section/results/description/description.component';


const routes: Routes = [
  {
    path: 'description/:movieId', component: DescriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
