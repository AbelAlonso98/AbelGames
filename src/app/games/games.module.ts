import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TicTacToeSquareComponent } from './tic-tac-toe-square/tic-tac-toe-square.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    RockPaperScissorsComponent,
    TicTacToeComponent,
    TicTacToeSquareComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatButtonModule
  ]
})
export class GamesModule { }
