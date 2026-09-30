import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chi-siamo',
  imports: [RouterLink],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChiSiamo {}