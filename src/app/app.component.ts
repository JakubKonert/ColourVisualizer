import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColourButtonPairsComponent } from './Components/colour-button-pairs/colour-button-pairs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColourButtonPairsComponent, ReactiveFormsModule, CommonModule, FormsModule ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public  title = 'ColourPalleteVisualizer';
  public newMain: string = '';
  public newSecondary: string = '';


  public colourPairs = [
  { id: '1', main: '#3498db', secondary: '#e74c3c' },
  { id: '2', main: '#2ecc71', secondary: '#9b59b6' },
  { id: '3', main: '#f39c12', secondary: '#1abc9c' },
  { id: '4', main: '#34495e', secondary: '#d35400' },
  ];

  public addColourPair(): void {
    const maxId = Math.max(...this.colourPairs.map(pair => parseInt(pair.id, 10)));

    const newPair = {
      id: (maxId + 1).toString(),
      main: this.newMain,
      secondary: this.newSecondary
    };

    this.colourPairs = [newPair, ...this.colourPairs];

    this.newMain = '';
    this.newSecondary = '';

  }
}
