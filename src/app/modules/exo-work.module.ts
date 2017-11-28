import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoWorkListComponent } from './exo-work/components/exo-work-list/exo-work-list.component';
import { ExoWorkRoutingModule } from './exo-work/exo-work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExoWorkRoutingModule
  ],
  declarations: [ExoWorkListComponent]
})
export class ExoWorkModule { }
