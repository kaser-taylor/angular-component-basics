import { Component } from "@angular/core"
@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `<h1> {{ message }}</h1>`,
})

export class HelloWorldComponent {
  message = 'Hello, Angular'
}