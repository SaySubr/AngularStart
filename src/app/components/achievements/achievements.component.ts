import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent 
{
  today = new Date();
  achievements = [
    { title: 'Учить Angular', status: 'done', type: 'main' },
    { title: 'Создать проект', status: 'inProgress', type: 'main' },
    { title: 'Сделать модалку погоды', status: 'todo', type: 'extra' },
    { title: 'Добавить реактивную форму', status: 'todo', type: 'main' }
  ];
}
