import { Component, OnInit } from '@angular/core';
import { ExoWorkService } from '../../services/exowork.service';
import { Person } from '../../modules/person';

@Component({
  selector: 'app-exowork-list',
  templateUrl: './exowork-list.component.html',
  styleUrls: ['./exowork-list.component.css']
})
export class ExoWorkListComponent implements OnInit {

  personList: Person[];
  getPersonListService: any;
  constructor(exoWorkService: ExoWorkService) {

    this.getPersonListService = exoWorkService.GetPersonList();
  }

  ngOnInit() {
    this.GetPersonList();

  }

  GetPersonList(): void {
    this.getPersonListService
      .subscribe(personList => {
        this.personList = personList;
      },
      error => console.log('error'));
  }

}
