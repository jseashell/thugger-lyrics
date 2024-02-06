import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  get isMobile$(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 495px').pipe(map((state) => state.matches));
  }
}
