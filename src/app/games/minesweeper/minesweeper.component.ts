import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit{
  // Might sound overkill to start all variables here but if I dont
  // TS starts crying.
  
  spaces: boolean[][] = Array.from({length: 10}, () => Array(10).fill(false));
  content: number[][] = Array.from({length: 10}, () => Array(10).fill(0));
  neighbours: number[][] = [[0,1],[0,-1],[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1]];
  gameover: boolean = false
  msg: String = "Don't click the mines!"

  ngOnInit(): void {
    // We initialize everything again cause when we click reset we
    // call ngOnInit, also if a player leaves the game, and then comes
    // back it has to be reset too.
    
    this.spaces.forEach(row => row.fill(false));
    this.content.forEach(row => row.fill(0));
    this.gameover = false;
    this.msg = "Don't click the mines!"
    
    // We set 15% chance to be a mine.
    for(let i = 0; i < 10;i++){
      for(let j=0;j<10;j++){
        if(Math.random() < 0.15)
        this.content[i][j] = -1;
      }
    }

    // After landing mines, we set the values of the neighbours
    // adding 1 to each cell near a mine. This function could be 
    // a little messy to underestand:
    // 1st - We iterate the entire content matrix, when we find a 
    // mine (value=-1) 
    // 2nd - We apply a function to every single neighbour,
    // with a two value array parameter that will take all the
    // values from the neighbours matrix.
    // 3rd - We increase the value of that cells checking that they
    // are not mines either.

    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(this.content[i][j] == -1){
          this.neighbours.forEach(([x, y]) => {
            const ni = i + x;
            const nj = j + y;
            if(ni>=0 && ni<10 && nj>=0 && nj<10 && this.content[ni][nj] != -1){
              this.content[ni][nj]++;
            }
          })
        }
      }
    }
  }

  // The next to methods work together as a recursive tandem.
  // When you click in a cell the spaces matrix value is set to 
  // true meaning its already checked. Then we check if its a mine,
  // if it is a mine, we set gameover to true and change the message.
  // Also if the value of the cell is 0 we need to propagate the click
  // so we call propagate.
  step(row: number, col: number){
    if(!this.spaces[row][col] && !this.gameover){
      this.spaces[row][col] = true;
      if(this.content[row][col] == -1){
        this.msg = "You have stepped on a mine, you are dead!"
        this.gameover = true;
      } else if(this.content[row][col] == 0){
        this.propagate(row, col);
      }
    }
  }

  // This simply checks every single neighbour and clicks it
  // for you.
  propagate(row: number, col: number){
    this.neighbours.forEach(([x,y]) => {
      const ni = row + x;
      const nj = col + y;
      if(ni >= 0 && ni < 10 && nj >= 0 && nj <10){
        this.step(ni, nj);
      }
    })
  }
}
