import { Component, OnInit } from '@angular/core';
import { ExoWorkService } from '../../services/exowork.service';
import { Person } from '../../modules/person';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exowork-list',
  templateUrl: './exowork-list.component.html',
  styleUrls: ['./exowork-list.component.css'],
  providers: [
    ExoWorkService
  ],
})
export class ExoWorkListComponent implements OnInit {

  personList: Person[];
  personSelected: Person;

  constructor(private exoWorkService: ExoWorkService, private router: Router) {
  }

  ngOnInit() {
    this.personSelected = undefined;
    this.GetPersonList();

  }

  GetPersonList(): void {
    this.exoWorkService.GetPersonList()
      .subscribe(personList => {
        this.personList = personList;
      },
      error => console.log('error'));
  }

  ShowInfo(person) {
    this.personSelected = this.personSelected && this.personSelected.id === person.id ? undefined : person;
  }


  GoToDetail(id) {
    this.router.navigate(['exowork/detail/', id]);
  }
}
