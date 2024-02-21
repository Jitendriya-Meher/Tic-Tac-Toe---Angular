import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  @Input() value:'X'|'O'|undefined;


}
