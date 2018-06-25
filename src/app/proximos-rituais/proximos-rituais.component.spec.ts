import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosRituaisComponent } from './proximos-rituais.component';

describe('ProximosRituaisComponent', () => {
  let component: ProximosRituaisComponent;
  let fixture: ComponentFixture<ProximosRituaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosRituaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosRituaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
