import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedLayoutComponent } from './reversed-layout.component';

describe('ReversedLayoutComponent', () => {
  let component: ReversedLayoutComponent;
  let fixture: ComponentFixture<ReversedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReversedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
