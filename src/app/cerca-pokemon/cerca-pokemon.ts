import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from '../pokemon.model';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
  selector: 'app-cerca-pokemon',
  imports: [PokemonCard],
  templateUrl: './cerca-pokemon.html',
  styleUrl: './cerca-pokemon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CercaPokemon {
  private readonly http = inject(HttpClient);

  protected readonly nomePokemon = signal('pikachu');
  protected readonly pokemon = signal<Pokemon | null>(null);
  protected readonly caricamento = signal(false);
  protected readonly errore = signal<string | null>(null);

  onNomeInput(event: Event): void {
    this.nomePokemon.set((event.target as HTMLInputElement).value);
  }

  async cerca(): Promise<void> {
    const nome = this.nomePokemon().trim().toLowerCase();
    if (!nome) {
      return;
    }

    this.caricamento.set(true);
    this.errore.set(null);
    this.pokemon.set(null);

    try {
      const risultato = await firstValueFrom(
        this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      );
      this.pokemon.set(risultato);
    } catch {
      this.errore.set('Pokémon non trovato. Controlla il nome e riprova.');
    } finally {
      this.caricamento.set(false);
    }
  }
}