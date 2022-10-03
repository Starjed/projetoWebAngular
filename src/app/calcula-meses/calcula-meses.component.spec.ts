import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaMesesComponent } from './calcula-meses.component';

describe('CalculaMesesComponent', () => {
  let component: CalculaMesesComponent;
  let fixture: ComponentFixture<CalculaMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaMesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
