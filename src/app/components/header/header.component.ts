import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherModalComponent } from '../weather-modal/weather-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,WeatherModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent 
{
  darkTheme = true;
  isLoggedIn = true;
  showWeatherModal = false;
  
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  openWeatherModal() {
    this.showWeatherModal = true;
  }

  closeWeatherModal() {
    this.showWeatherModal = false;
  }
}
