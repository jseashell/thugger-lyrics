import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThugComponent } from './thug/thug.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThugComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
