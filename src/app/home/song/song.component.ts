import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MobileService } from '../../mobile.service';
import { ScrapedSong } from './song.interface';
import { SongService } from './song.service';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [SongService],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css',
})
export class SongComponent implements OnInit {
  isMobile$!: Observable<boolean>;
  isMock = false;
  scrapedSong$ = new Subject<ScrapedSong>();

  constructor(
    private mobileService: MobileService,
    private songService: SongService,
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.mobileService.isMobile$;
    this.isMock = environment.mocks.songs;
    this.refresh();
  }

  refresh(e?: Event) {
    e?.stopPropagation();
    firstValueFrom(this.songService.random$).then((song) => {
      this.scrapedSong$.next(song);
    });
  }

  trackByItem(scrapedSong: ScrapedSong): string {
    return scrapedSong.id;
  }
}
