import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { WeatherModalComponent } from './components/weather-modal/weather-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, WeatherModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  showWeather = false;


  closeWeather() {
    this.showWeather = false;
  }
   
  toggleWeather() {
    this.showWeather = !this.showWeather;
  }

}
