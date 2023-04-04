import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCompoComponent } from './api-compo.component';

describe('ApiCompoComponent', () => {
  let component: ApiCompoComponent;
  let fixture: ComponentFixture<ApiCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
