import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent 
{
  darkTheme = true;
  isLoggedIn = true;
  showWeatherModal = false;
  @Output() weatherClick = new EventEmitter<void>();

  
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  onWeatherClick() {
    this.weatherClick.emit();
  }
}
