import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'AbelGames';
  nick:string = "newPlayer";
  changed: boolean = false;

  recieveNick(nick: string){
    this.nick = nick;
    this.changed = true;
    console.log('Nick recieved: ', this.nick);
  }

}
