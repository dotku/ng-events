import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, ButtonModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css',
})
export class ToolBarComponent {
  constructor(private config: PrimeNGConfig) {}
}
