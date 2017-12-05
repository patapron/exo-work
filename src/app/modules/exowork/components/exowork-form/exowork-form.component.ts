import { Component, OnInit } from '@angular/core';
import { ExoWorkService } from '../../services/exowork.service';
import { Person } from '../../modules/person';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exowork-form',
  templateUrl: './exowork-form.component.html',
  styleUrls: ['./exowork-form.component.css'],
  providers: [
    ExoWorkService
  ],
})
export class ExoWorkFormComponent implements OnInit {

  personDetail: Person;
  id: number;
  private sub: any;

  constructor(private exoWorkService: ExoWorkService, public dialog: MatDialog, private activatedRoute: ActivatedRoute, ) {
    this.GetId();
  }

  ngOnInit() {
    this.GetSection();
  }

  GetSection() {
    this.exoWorkService.GetSection(this.id)
      .subscribe(element => (
        this.personDetail = element,
        console.log(element)

      ),

      error => console.log(error));
  }

  GetId() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

}
