import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-square',
  templateUrl: './tic-tac-toe-square.component.html',
  styleUrls: ['./tic-tac-toe-square.component.css']
})
export class TicTacToeSquareComponent {
  @Input() value: string = '?';

}
