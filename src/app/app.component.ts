import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LyricComponent } from './lyric/lyric.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LyricComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
