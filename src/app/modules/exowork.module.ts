import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ExoWorkListComponent } from './exowork/components/exowork-list/exowork-list.component';
import { ExoWorkRoutingModule } from './exowork/exowork-routing.module';
import { MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ExoWorkRoutingModule,
    MatListModule,
    MatIconModule,
    HttpClientModule
  ],
  declarations: [ExoWorkListComponent]
})
export class ExoWorkModule { }
