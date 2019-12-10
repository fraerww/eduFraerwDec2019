import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphixComponent } from './graphix.component';

describe('GraphixComponent', () => {
  let component: GraphixComponent;
  let fixture: ComponentFixture<GraphixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
