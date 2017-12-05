import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoWorkFormComponent } from './exowork-form.component';

describe('ExoWorkFormComponent', () => {
  let component: ExoWorkFormComponent;
  let fixture: ComponentFixture<ExoWorkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoWorkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoWorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
