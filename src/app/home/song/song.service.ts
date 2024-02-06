import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Song } from './song.interface';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private http: HttpClient) {}

  get random$(): Observable<Song> {
    return this.http.get<Song>(`${environment.api.endpoint}/random`).pipe(
      switchMap((song) => {
        // TODO Implement retry
        if (song.lyrics?.length < 4) {
          return this.http.get<Song>(`${environment.api.endpoint}/random`);
        } else {
          return of(song);
        }
      }),
      map((song) => {
        const numLyrics = 4;
        const rand = this.getRandomInt(numLyrics, song.lyrics?.length - numLyrics);
        return {
          ...song,
          lyrics: song.lyrics.slice(rand, rand + numLyrics),
        };
      }),
    );
  }

  private getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
}
