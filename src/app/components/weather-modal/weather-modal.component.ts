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
  selectingCity = true;

  locations = environment.weatherLocations;

  constructor(private http: HttpClient) {}

  loadWeather(location: any) {
    this.loading = true;
    this.selectingCity = false; 
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${location.lat}&lon=${location.lon}&key=${environment.weatherApiKey}`;
    this.http.get(url).subscribe({
      next: (data) => { 
        this.weather = data; 
        this.loading = false; 
      },
      error: () => { 
        this.weather = null; 
        this.loading = false; 
        alert('Ошибка загрузки погоды'); 
      }
    });
  }

  backToCities() {
    this.selectingCity = true; 
    this.weather = null;        
  }

  closeModal() {
    this.close.emit(); 
  }

getTemperatureColor(): string {
  const temp = this.weather?.data?.current?.weather?.tp;
  if (temp == null) return '#42AAFF'; // стандартный фон

  const minTemp = 1;
  const maxTemp = 27;
  const clampedTemp = Math.min(Math.max(temp, minTemp), maxTemp);
  const percent = (clampedTemp - minTemp) / (maxTemp - minTemp);

  const coldColor = { r: 13, g: 59, b: 102 };   // тёмно-синий
  const warmColor = { r: 255, g: 107, b: 107 };  // красноватый

  const r = Math.round(coldColor.r + percent * (warmColor.r - coldColor.r));
  const g = Math.round(coldColor.g + percent * (warmColor.g - coldColor.g));
  const b = Math.round(coldColor.b + percent * (warmColor.b - coldColor.b));

  return `rgb(${r}, ${g}, ${b})`;
}

}
