import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoMuaComponentComponent } from './movimiento-mua-component.component';

describe('MovimientoMuaComponentComponent', () => {
  let component: MovimientoMuaComponentComponent;
  let fixture: ComponentFixture<MovimientoMuaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientoMuaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientoMuaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
