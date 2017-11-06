import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PContentComponent } from './p-content.component';

describe('PContentComponent', () => {
  let component: PContentComponent;
  let fixture: ComponentFixture<PContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
