import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-portfolio-grid-list',
    templateUrl: './portfolio-grid-list.component.html',
    styleUrls: ['./portfolio-grid-list.component.css']
})
export class PortfolioGridListComponent implements OnInit {

    projectsList = [
        'I Hate Coffee!: だめです！',
        'Super Simple and Small 2D Platformer Game',
        'Kantum Leap-a',
        'Pantsu Breakout Game',
        'SSSSSSSSSSSSSSSS',
        'GGGGGGGGGGGGGGGGGGGGO',
        'あいうえお',
        'かきくけこ',
        'さしすせそ',
        'たちつてと',
        'なにぬねの'
    ];

    constructor() {}

    ngOnInit() {
    }

}
