import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNGConfig } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { Aura } from 'primeng/themes/aura';
import { updatePrimaryPalette } from 'primeng/themes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SocialLinksComponent,
    FooterComponent,
    ToolbarModule,
    ToolBarComponent,
    ToolBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: Aura,
    });
  }

  title = 'ng-events';

  ngOnInit() {}
}
