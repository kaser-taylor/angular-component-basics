import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world.component';
import { TitleChangerComponent } from './components/title-changer.component';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, TitleChangerComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet-paradise';
}
