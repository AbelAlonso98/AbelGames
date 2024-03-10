import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minesweeper-square',
  templateUrl: './minesweeper-square.component.html',
  styleUrls: ['./minesweeper-square.component.css']
})
export class MinesweeperSquareComponent {
  @Input() value: number = 0;
  @Input() clicked: boolean = false;

}
