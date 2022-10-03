import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaIdadeComponent } from './calcula-idade.component';

describe('CalculaIdadeComponent', () => {
  let component: CalculaIdadeComponent;
  let fixture: ComponentFixture<CalculaIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaIdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
