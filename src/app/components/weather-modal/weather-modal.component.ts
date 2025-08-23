import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-modal',
  standalone: true,
  imports: [],
  templateUrl: './weather-modal.component.html',
  styleUrl: './weather-modal.component.scss'
})
export class WeatherModalComponent 
{
  showModal = false;
  loading = false;
}
