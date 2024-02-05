import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRouteComponent } from './nav-route.component';

describe('NavRouteComponent', () => {
  let component: NavRouteComponent;
  let fixture: ComponentFixture<NavRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
