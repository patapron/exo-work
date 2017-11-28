
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoWorkListComponent } from './components/exo-work-list/exo-work-list.component';


const routes: Routes = [
  {
    path: '',
    component: ExoWorkListComponent,
    data: {
      name: ''
    }
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ExoWorkRoutingModule { }
