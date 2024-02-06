import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { MobileService } from '../../mobile.service';
import { Song } from './song.interface';
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
  song$ = new Subject<Song>();

  constructor(
    private mobileService: MobileService,
    private songService: SongService,
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.mobileService.isMobile$;
    this.refresh();
  }

  refresh(e?: Event) {
    e?.stopPropagation();
    firstValueFrom(this.songService.random$).then((song) => {
      this.song$.next(song);
    });
  }
}
