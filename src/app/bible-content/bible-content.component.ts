import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IBooks, BibleBooks } from '../models/bible.books.model';

@Component({
    selector: 'app-bible-content',
    templateUrl: './bible-content.component.html',
    styleUrls: ['./bible-content.component.scss'],
})
export class BibleContentComponent implements OnInit {
    public books: IBooks[] = new Array<IBooks>();
    public chapters: Number[] = [];
    public selectedBook = '';
    public selectedChapter = 1;

    constructor() {
        this.books = BibleBooks;
        this.selectedBook = this.books[0].name;
        this.chapters = new Array<Number>(this.books[0].lastChapter);
        this.selectedChapter = 1;
    }

    bookSelected($event: Event) {
        this.selectedBook = ($event.target as HTMLInputElement).value;
        let book = this.books.find((book) => book.name === this.selectedBook);
        if(book === undefined) {
            book = this.books[0];
            this.selectedBook = book.name;
            this.selectedChapter = 1;
        }
        this.chapters = new Array<Number>(book.lastChapter);
    }

    chapterSelected($event: Event) {
        console.log(($event.target as HTMLInputElement).value);
        this.selectedChapter = +(($event.target as HTMLInputElement).value);
    }

    ngOnInit(): void {}
}
