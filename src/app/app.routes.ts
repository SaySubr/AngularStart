import { Routes } from '@angular/router';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'achievements', component: AchievementsComponent }, 
  { path: '**', redirectTo: '' } 
];
