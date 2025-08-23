import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelEmojiPipe } from '../../pipes/level-emoji.pipe';


@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [LevelEmojiPipe],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent 
{
  today = new Date();
  achievements = [
    { title: 'Учить Angular', status: 'done', type: 'main', level: 'high' },
    { title: 'Создать проект', status: 'inProgress', type: 'main', level: 'medium' },
    { title: 'Сделать модалку погоды', status: 'todo', type: 'extra', level: 'low' },
    { title: 'Добавить реактивную форму', status: 'todo', type: 'main', level: 'medium' }
  ];
}
