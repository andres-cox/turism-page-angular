import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractionComponent } from './atraction.component';

describe('AtractionComponent', () => {
  let component: AtractionComponent;
  let fixture: ComponentFixture<AtractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
