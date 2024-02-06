import { LayoutModule } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileService } from './mobile.service';
import { ThugComponent } from './thug/thug.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutModule, RouterOutlet, ThugComponent],
  providers: [MobileService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
