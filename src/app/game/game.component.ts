import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent,NgFor,NgIf,NgForOf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  squares:any = [];
  xIsNext:boolean = true;
  winner:string = "";
  counter:number = 0;
  isDraw:string = "";
  freshpage:boolean = true;

  ngOnInit():void {

  }

  newGame():void{
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.isDraw = "";
    this.counter = 0;
    this.freshpage = false;
  }

  get player(){
    return this.xIsNext ? "X":"O";
  }

  makeMove(idx:number):void{
    if( !this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;

      this.calcWinner();
      
      if( !this.winner && this.counter==9){
        this.isDraw = "yes";
        this.freshpage = true;
      }

      console.log(this.counter, this.winner,idx);
    }
  }

  calcWinner():any{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for( let i = 0; i < lines.length; i++ ){
      const [a,b,c] = lines[i];
      if( this.squares[a] && this.squares[a]===this.squares[b] && this.squares[a]===this.squares[c]){
        console.log("winner ",i);
        this.freshpage = true;
        this.winner = this.squares[a];
      }
    }
  }
}
