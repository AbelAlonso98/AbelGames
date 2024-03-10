import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nick: string = "newPlayer"
  @Output() nickEntered: EventEmitter<string> = new EventEmitter<string>();

  setName(){
    console.log('Nombre ingresado: ',this.nick);
    this.nickEntered.emit(this.nick);
  }

}
