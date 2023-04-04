import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseCompoComponent } from './promise-compo.component';

describe('PromiseCompoComponent', () => {
  let component: PromiseCompoComponent;
  let fixture: ComponentFixture<PromiseCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
