import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverCompoComponent } from './resolver-compo.component';

describe('ResolverCompoComponent', () => {
  let component: ResolverCompoComponent;
  let fixture: ComponentFixture<ResolverCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
