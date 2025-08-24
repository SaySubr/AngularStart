import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelEmojiPipe } from '../../pipes/level-emoji.pipe';



@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [LevelEmojiPipe,CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent 
{
  today = new Date();

  constructor() {
    this.sortAchievements();
  }
 sortAchievements() {
  const order: Record<'done' | 'inProgress' | 'todo', number> = {
    done: 1,
    inProgress: 2,
    todo: 3
  };

  this.achievements.sort(
    (a, b) => order[a.status as 'done' | 'inProgress' | 'todo'] - order[b.status as 'done' | 'inProgress' | 'todo']
  );
}
  achievements = [
  { title: 'Учить Angular', status: 'done', type: 'main', level: 'high' },
  { title: 'Создать проект', status: 'inProgress', type: 'main', level: 'medium' },
  { title: 'Сделать модалку погоды', status: 'done', type: 'extra', level: 'low' },
  { title: 'Добавить реактивную форму', status: 'done', type: 'main', level: 'medium' },
  { title: 'Передавать данные через Input/Output', status: 'inProgress', type: 'main', level: 'medium' },
  { title: 'Сделать деплой на GitHub Pages', status: 'todo', type: 'main', level: 'medium' },
  { title: 'Добавить Routing (несколько страниц)', status: 'done', type: 'main', level: 'medium' },
  { title: 'Подключить HTTPClient и сделать GET запрос', status: 'inProgress', type: 'main', level: 'high' },
  { title: 'Реализовать сервис для работы с API погоды', status: 'todo', type: 'main', level: 'medium' },
  { title: 'Сделать компонент загрузки (spinner)', status: 'done', type: 'extra', level: 'low' },
  { title: 'Применить пайпы (date, currency, custom)', status: 'done', type: 'extra', level: 'low' },
  { title: 'Сортировать todo по статусу', status: 'done', type: 'extra', level: 'medium' },
  { title: 'Сортировать todo по важности', status: 'todo', type: 'extra', level: 'medium' },
  { title: 'Сохранить настройки в LocalStorage', status: 'inProgress', type: 'main', level: 'medium' },
  { title: 'Сделать директиву для подсветки текста', status: 'done', type: 'extra', level: 'low' },
  { title: 'Подключить Angular Material', status: 'todo', type: 'extra', level: 'medium' },
  { title: 'Обработать ошибки (try/catch + interceptor)', status: 'todo', type: 'main', level: 'high' },
  { title: 'Сделать POST запрос (отправка формы)', status: 'done', type: 'main', level: 'high' },
  { title: 'Добавить HttpInterceptor для токена авторизации', status: 'inProgress', type: 'main', level: 'high' },
  { title: 'Организовать Lazy Loading модулей', status: 'todo', type: 'main', level: 'medium' },
  { title: 'Вынести конфигурацию API в environment.ts', status: 'done', type: 'main', level: 'low' },
  { title: 'Сделать unit-тест сервиса погоды', status: 'todo', type: 'extra', level: 'medium' },
  { title: 'Добавить Guard (AuthGuard, CanActivate)', status: 'todo', type: 'main', level: 'high' },
  { title: 'Сделать компонент уведомлений (toast)', status: 'inProgress', type: 'extra', level: 'medium' },
  { title: 'Добавить поддержку PWA (offline cache)', status: 'todo', type: 'extra', level: 'high' },
  { title: 'Сделать рефакторинг структуры папок (feature-modules)', status: 'inProgress', type: 'main', level: 'medium' },
  { title: 'Исправить двойной запрос при навигации', status: 'todo', type: 'extra', level: 'medium' },
  { title: 'Починить неверный формат даты в пайпе', status: 'done', type: 'extra', level: 'low' },
  { title: 'Оптимизировать загрузку модулей', status: 'inProgress', type: 'main', level: 'medium' },
  { title: 'Исправить стили кнопок для мобильной версии', status: 'todo', type: 'extra', level: 'low' },
  { title: 'Добавить уведомление об ошибке при POST', status: 'done', type: 'extra', level: 'medium' }
];


}
