import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthclassicComponent } from './ethclassic.component';

describe('EthclassicComponent', () => {
  let component: EthclassicComponent;
  let fixture: ComponentFixture<EthclassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthclassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
