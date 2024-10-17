import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNGConfig } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { Aura } from 'primeng/themes/aura';
import { definePreset, updatePrimaryPalette } from 'primeng/themes';

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
      preset: definePreset(Aura, {
        semantic: {
          primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}',
          },
        },
      }),
      cssLayer: {
        name: 'primeng',
        order: 'tailwind-base, primeng, tailwind-utilities',
      },
    });
  }

  title = 'ng-events';

  ngOnInit() {}
}
