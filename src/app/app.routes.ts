import { Routes } from '@angular/router';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'achievements', component: AchievementsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'achievements', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'achievements' } 
];
