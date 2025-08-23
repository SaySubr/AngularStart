import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { WeatherModalComponent } from './components/weather-modal/weather-modal.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent,
    FooterComponent,
    AchievementsComponent,
    WeatherModalComponent,
    AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{

}
