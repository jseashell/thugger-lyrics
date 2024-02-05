import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lyric } from './lyric.interface';
import { LyricService } from './lyric.service';

@Component({
  selector: 'app-lyric',
  standalone: true,
  imports: [CommonModule],
  providers: [LyricService],
  templateUrl: './lyric.component.html',
  styleUrl: './lyric.component.css',
})
export class LyricComponent implements OnInit {
  random$!: Observable<Lyric>;

  constructor(private lyricService: LyricService) {}

  ngOnInit(): void {
    this.random$ = this.lyricService.random$;
  }
}
