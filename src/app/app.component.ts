import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-theming';

  constructor(private renderer: Renderer2) {
      // Assegna il tema predefinito (light theme) al caricamento dell'applicazione
  this.renderer.addClass(document.body, 'light-theme');
  }

}
