import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeViewerComponent } from './theme-viewer.component';

describe('ThemeViewerComponent', () => {
  let component: ThemeViewerComponent;
  let fixture: ComponentFixture<ThemeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
