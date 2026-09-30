import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Prodotto {
  id: number;
  nome: string;
  prezzo: number;
  disponibile: boolean;
}

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly nomeUtente = signal('studente');

  protected readonly prodotti = signal<Prodotto[]>([
    { id: 1, nome: 'Tastiera meccanica', prezzo: 79.9, disponibile: true },
    { id: 2, nome: 'Monitor 27"', prezzo: 249.0, disponibile: true },
    { id: 3, nome: 'Webcam HD', prezzo: 39.5, disponibile: false },
  ]);

  onNomeInput(event: Event): void {
    const valore = (event.target as HTMLInputElement).value;
    this.nomeUtente.set(valore);
  }

  aggiungiProdotto(): void {
    const nuovoId = this.prodotti().length + 1;
    this.prodotti.update((lista) => [
      ...lista, // spread: copia tutti gli elementi già presenti in un array NUOVO...
      { id: nuovoId, nome: `Prodotto ${nuovoId}`, prezzo: 9.99, disponibile: true }, // ...e in coda ci mette il nuovo prodotto
    ]);
  }

  toggleDisponibilita(id: number): void {
    this.prodotti.update((lista) =>
      lista.map((p) =>
        p.id === id
          ? { ...p, disponibile: !p.disponibile } // spread: copia tutte le proprietà di "p" in un oggetto NUOVO, poi sovrascrive solo "disponibile"
          : p // prodotto non toccato: stesso riferimento di prima, non serve clonarlo
      )
    );
  }
}