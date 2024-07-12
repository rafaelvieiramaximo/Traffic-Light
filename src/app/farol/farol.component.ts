import { Component } from '@angular/core';

@Component({
  selector: 'app-farol',
  templateUrl: './farol.component.html',
  styleUrl: './farol.component.css'
})
export class FarolComponent {
  light1 = 'light-off';
  light2 = 'light-off';
  light3 = 'light-off';
  currentStep = 0;

  changeLight() {
    this.resetLights();

    switch (this.currentStep) {
      case 0:
        this.light1 = 'red'
        break;
      case 1:
        this.light1 = 'light-off'
        this.light2 = 'yellow'
        break;
      case 2:
        this.light2 = 'light-off'
        this.light3 = 'green'
        break;
      case 3:
        this.resetLights();
        break;
    }
    this.currentStep = (this.currentStep + 1) % 4;
  }

  resetLights() {
    this.light1 = "light-off";
    this.light2 = "light-off";
    this.light3 = "light-off";
  }
}
