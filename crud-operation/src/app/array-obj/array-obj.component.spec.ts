import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayObjComponent } from './array-obj.component';

describe('ArrayObjComponent', () => {
  let component: ArrayObjComponent;
  let fixture: ComponentFixture<ArrayObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayObjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
