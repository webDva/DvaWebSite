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
            description: 'My latest game about how much coffee sucks.',
            link: 'https://windows146.github.io/I-Hate-Coffee-/public_html/'
        }
    ];

    constructor() {}

    ngOnInit() {
    }

}
