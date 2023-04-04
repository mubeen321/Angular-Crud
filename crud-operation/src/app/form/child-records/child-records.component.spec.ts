import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRecordsComponent } from './child-records.component';

describe('ChildRecordsComponent', () => {
  let component: ChildRecordsComponent;
  let fixture: ComponentFixture<ChildRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
