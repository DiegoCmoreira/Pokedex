import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAnimacaoComponent } from './poke-animacao.component';

describe('PokeAnimacaoComponent', () => {
  let component: PokeAnimacaoComponent;
  let fixture: ComponentFixture<PokeAnimacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeAnimacaoComponent]
    });
    fixture = TestBed.createComponent(PokeAnimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
