import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigibyteComponent } from './digibyte.component';

describe('DigibyteComponent', () => {
  let component: DigibyteComponent;
  let fixture: ComponentFixture<DigibyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigibyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigibyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
