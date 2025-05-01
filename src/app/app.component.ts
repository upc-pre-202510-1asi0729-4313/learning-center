import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';

  constructor(private translateService: TranslateService) {
    translateService.use('en');
    translateService.addLangs(['en', 'es']);

    const env = environment.production;
    console.log(env);
  }

}
