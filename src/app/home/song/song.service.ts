import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ScrapedSong } from './song.interface';
import { mockSongs } from './song.mock';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private http: HttpClient) {}

  get random$(): Observable<ScrapedSong> {
    let obs;

    if (environment.mocks.songs) {
      const i = this.getRandomInt(0, mockSongs.length);
      obs = of(mockSongs[i]);
    } else {
      obs = this.http.get<ScrapedSong>(`${environment.api.endpoint}/random`);
    }

    return obs.pipe(
      map((song) => {
        const numLyrics = 4;
        const rand = this.getRandomInt(numLyrics, (song.lyrics?.length || 4) - numLyrics);
        return {
          ...song,
          lyrics: song.lyrics?.slice(rand, rand + numLyrics) || [],
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
