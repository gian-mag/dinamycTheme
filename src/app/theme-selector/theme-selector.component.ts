import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent {

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

}
