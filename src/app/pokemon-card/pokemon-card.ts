import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCard {
  readonly pokemon = input.required<Pokemon>();
}