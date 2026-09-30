import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ChiSiamo } from './chi-siamo/chi-siamo';
import { CercaPokemon } from './cerca-pokemon/cerca-pokemon';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'chi-siamo', component: ChiSiamo },
  { path: 'cerca-pokemon', component: CercaPokemon },
];