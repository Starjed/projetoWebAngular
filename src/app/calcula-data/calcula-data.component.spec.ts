import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaDataComponent } from './calcula-data.component';

describe('CalculaDataComponent', () => {
  let component: CalculaDataComponent;
  let fixture: ComponentFixture<CalculaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
