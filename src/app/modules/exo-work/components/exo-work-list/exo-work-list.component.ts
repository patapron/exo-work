import { Component, OnInit } from '@angular/core';
import { ExoWorkService } from '../../services/exo-work.service';
import { Person } from '../../modules/person';

@Component({
  selector: 'app-exo-work-list',
  templateUrl: './exo-work-list.component.html',
  styleUrls: ['./exo-work-list.component.css']
})
export class ExoWorkListComponent implements OnInit {

  personList: Person[];
  constructor(private exoWorkService: ExoWorkService) { }

  ngOnInit() {
    this.GetPersonList();
  }

  GetPersonList(): void {
    this.exoWorkService.GetPersonList()
      .subscribe(personList => {
        this.personList = personList;
      },
      error => console.log('error'));
  }

}
