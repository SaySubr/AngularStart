import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-weather-modal',
  standalone: true,
  imports: [CommonModule, HttpClient],
  templateUrl: './weather-modal.component.html',
  styleUrl: './weather-modal.component.scss'
})
export class WeatherModalComponent 
{
  showModal = false;
  weather: any = null;
  loading = false;

  locations = [
    { name: "Центр", lat: 56.0106, lon: 92.8526 },
    { name: "Северо-запад", lat: 56.05, lon: 92.90 },
    { name: "Юг", lat: 55.98, lon: 92.83 }
  ];

  constructor(private http: HttpClient) {}
  
   loadWeather(location: any) {
    this.loading = true;
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${location.lat}&lon=${location.lon}&key=${environment.weatherApiKey}`;
    this.http.get(url).subscribe({
      next: (data) => { this.weather = data; this.loading = false; this.showModal = true; },
      error: () => { this.weather = null; this.loading = false; alert('Ошибка загрузки погоды'); }
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
