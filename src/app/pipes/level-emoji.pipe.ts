import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelEmoji'
})
export class LevelEmojiPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'high':
        return '🔝';
      case 'medium':
        return '⚡';
      case 'low':
        return '⬇️';
      default:
        return '❔';
    }
  }

}
