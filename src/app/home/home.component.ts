import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LyricComponent } from './lyric/lyric.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LyricComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
