import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavRouteComponent } from './nav-route/nav-route.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, NavRouteComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {}
