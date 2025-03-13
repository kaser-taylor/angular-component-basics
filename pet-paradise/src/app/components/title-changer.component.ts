import { Component } from '@angular/core'

@Component({
    selector: 'app-title-changer',
    standalone: true,
    template: `
        <h2>{{ title }} </h2>
        <button (click)="changeTitle()">Change Title</button>
    `,
})

export class TitleChangerComponent {
    title = 'Default Title';

    changeTitle() {
        this.title = 'Title Updated!';
    }
}