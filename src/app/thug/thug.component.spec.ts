import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThugComponent } from './thug.component';

describe('ThugComponent', () => {
  let component: ThugComponent;
  let fixture: ComponentFixture<ThugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
