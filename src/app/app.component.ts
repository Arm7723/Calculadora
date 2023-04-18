import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  inputValue = '';

  appendToInput(value: string){
    this.inputValue += value;
  }

  clear(){
    this.inputValue = '';
  }

  calculate(){
    try{
      this.inputValue = eval(this.inputValue);
    } catch (error) {
      this.inputValue = 'Error';
    }
  }
}
