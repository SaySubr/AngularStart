import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-weather-modal',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss']
})
export class WeatherModalComponent {
  @Output() close = new EventEmitter<void>();

  showModal = true;
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
      next: (data) => { this.weather = data; this.loading = false; },
      error: () => { this.weather = null; this.loading = false; alert('Ошибка загрузки погоды'); }
    });
  }

  closeModal() {
    this.close.emit(); 
  }
}
