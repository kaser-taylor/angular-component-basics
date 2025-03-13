import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `
        <nav>
            <h1>{{title}}</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul
            >
        </nav>
    `,
    styles: [`
        nav {
        background: #333;
        color: white;
        padding: 10px;
        }
        ul {
            list-style: none;
            padding: 0;
            display: flex;
            gap: 10px;
        }
        a {
            color: white;
            text-decoration: none;
        }
        `]
})

export class NavbarComponent {
    title = 'My website'
}