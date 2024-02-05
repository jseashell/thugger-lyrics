import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-route',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-route.component.html',
  styleUrl: './nav-route.component.css',
})
export class NavRouteComponent {
  @Input() label!: string;
  @Input() path!: string;
}
