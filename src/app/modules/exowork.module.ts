import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ExoWorkListComponent } from './exowork/components/exowork-list/exowork-list.component';
import { ExoWorkRoutingModule } from './exowork/exowork-routing.module';
import {
  MatListModule, MatIconModule, MatCardModule, MatProgressSpinnerModule,
  MatButtonModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { ExoWorkFormComponent } from './exowork/components/exowork-form/exowork-form.component';

@NgModule({
  imports: [
    CommonModule,
    ExoWorkRoutingModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [ExoWorkListComponent, ExoWorkFormComponent]
})
export class ExoWorkModule { }
