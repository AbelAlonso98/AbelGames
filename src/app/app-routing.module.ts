import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RockPaperScissorsComponent } from './games/rock-paper-scissors/rock-paper-scissors.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
{
  path: 'games',
  loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
},
{
  path: 'games/rock-paper-scissors', component: RockPaperScissorsComponent
},
{
    path: 'games/tic-tac-toe', component: RockPaperScissorsComponent
},
{
  path: 'developer', component: DeveloperComponent
},
{
  path: 'project', component: ProjectComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
