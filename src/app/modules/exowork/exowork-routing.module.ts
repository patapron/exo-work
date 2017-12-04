
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoWorkListComponent } from './components/exowork-list/exowork-list.component';



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
