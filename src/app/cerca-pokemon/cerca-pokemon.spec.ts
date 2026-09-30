import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CercaPokemon } from './cerca-pokemon';

describe('CercaPokemon', () => {
  let component: CercaPokemon;
  let fixture: ComponentFixture<CercaPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CercaPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(CercaPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
