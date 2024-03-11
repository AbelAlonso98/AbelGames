import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RockPaperScissorsComponent } from './games/rock-paper-scissors/rock-paper-scissors.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProjectComponent } from './project/project.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MinesweeperComponent } from './games/minesweeper/minesweeper.component';
import { TicTacToeComponent } from './games/tic-tac-toe/tic-tac-toe.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
{
  path: 'games',
  loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
},
{
  path: 'games/rock-paper-scissors/:nick', component: RockPaperScissorsComponent
},
{
    path: 'games/tic-tac-toe/:nick', component: TicTacToeComponent
},
{
  path: 'games/minesweeper/:nick', component: MinesweeperComponent
},
{
  path: 'developer', component: DeveloperComponent
},
{
  path: 'project', component: ProjectComponent
},
{
  path: 'portfolio', component: PortfolioComponent
},
{
  path: '', component: LandingPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
