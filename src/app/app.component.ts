import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {FooterContentComponent} from './public/components/footer-content/footer-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbar, MatToolbarRow, MatAnchor, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent, FooterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';

  options = [
    { link: '/home', label: 'home' },
    { link: '/about', label: 'about' },
    { link: '/learning/courses', label: 'courses' },
  ];

  constructor(private translateService: TranslateService) {
    translateService.use('en');
    translateService.setDefaultLang('en');
    translateService.addLangs(['en', 'es']);
  }

}
