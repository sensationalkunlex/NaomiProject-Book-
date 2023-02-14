import { Component, OnInit } from '@angular/core';
import { book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 bookList:book[]=[]
  constructor() { }

  ngOnInit(): void {
    this.bookList = [
      {
        id:1,
        title: 'The beautiful side of the moon',
        pages: 300,
        author:'Leye Adenle'
      },
      {
        id:2,
        title: 'When the sky is ready',
        pages: 100,
        author:'Seye Ogundele'
      },
      {
        id:3,
        title: 'Stay with me',
        pages: 400,
        author:'Nnamdi Okonkwo'
      },
      {
        id:4,
        title: 'The beautiful side of the moon',
        pages: 300,
        author:'Leye Adenle'
      },
    ]
  }

}
