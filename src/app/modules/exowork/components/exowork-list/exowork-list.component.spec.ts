import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoWorkListComponent } from './exowork-list.component';

describe('ExoWorkListComponent', () => {
  let component: ExoWorkListComponent;
  let fixture: ComponentFixture<ExoWorkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoWorkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
