import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lyric } from './lyric.interface';
import { mockLyrics } from './lyric.mock';

@Injectable({
  providedIn: 'root',
})
export class LyricService {
  get all$(): Observable<Lyric[]> {
    return of(mockLyrics);
  }

  get random$(): Observable<Lyric> {
    const i = Math.floor(Math.random() * mockLyrics.length);
    return of(mockLyrics[i]);
  }
}
