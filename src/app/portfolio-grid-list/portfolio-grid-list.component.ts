import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-portfolio-grid-list',
    templateUrl: './portfolio-grid-list.component.html',
    styleUrls: ['./portfolio-grid-list.component.css']
})
export class PortfolioGridListComponent implements OnInit {

    projectsList = [
    /*
     * name, image, description, link
     */
        {
            name: 'I Hate Coffee!: だめです！',
            image: './assets/i hate coffee logo.png',
            description: 'My latest game, about how much coffee sucks.',
            link: 'https://windows146.github.io/I-Hate-Coffee-/public_html/'
        },
        
        {
            name: 'Super Simple and Small 2D Platformer Game',
            image: './assets/super simple platformer.PNG',
            description: 'My first 2D platformer.',
            link: 'https://windows146.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html'
        },
        
        {
            name: 'Pantsu Breakout Game',
            image: './assets/pantsu.png',
            description: 'My first web game made with Javascript. やった！',
            link: 'https://windows146.github.io/Pantsu-Breakout-Game/public_html/'
        },
        
        {
            name: 'Pans.ly',
            image: './assets/pean-stack.png',
            description: 'Not a game, but my first ever web development project, a URL shortener.',
            link: 'https://github.com/windows146/Pans.ly'
        }
    ];

    constructor() {}

    ngOnInit() {
    }

}
