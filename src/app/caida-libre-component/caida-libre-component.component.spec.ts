import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaidaLibreComponentComponent } from './caida-libre-component.component';

describe('CaidaLibreComponentComponent', () => {
  let component: CaidaLibreComponentComponent;
  let fixture: ComponentFixture<CaidaLibreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaidaLibreComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaidaLibreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
