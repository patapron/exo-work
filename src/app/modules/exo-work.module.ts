import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoWorkListComponent } from './exo-work/components/exo-work-list/exo-work-list.component';
import { ExoWorkRoutingModule } from './exo-work/exo-work-routing.module';
import { MatListModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ExoWorkRoutingModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [ExoWorkListComponent]
})
export class ExoWorkModule { }
