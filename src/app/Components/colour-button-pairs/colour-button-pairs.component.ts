import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colour-button-pairs',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './colour-button-pairs.component.html',
  styleUrl: './colour-button-pairs.component.scss'
})
export class ColourButtonPairsComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) mainColor!: string;
  @Input({required: true}) secondaryColor!: string;
}
