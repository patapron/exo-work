
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoWorkListComponent } from './components/exowork-list/exowork-list.component';
import { ExoWorkFormComponent } from './components/exowork-form/exowork-form.component';



const routes: Routes = [
  {
    path: '',
    component: ExoWorkListComponent,
    data: {
      name: ''
    }
  },
  {
    path: 'detail/:id',
    component: ExoWorkFormComponent,
    data: {
      name: 'Detail'
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
