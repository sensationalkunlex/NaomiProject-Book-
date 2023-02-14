import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarkList: object[]=[];
  constructor() { }

  getBookmarks() {
    return this.bookmarkList;
  }

  addToBookmarks(bookmark:any) {
    this.bookmarkList.push(bookmark);
    return this.bookmarkList;
  }

  clearBookmarks() {
    this.bookmarkList = [];
    return this.bookmarkList;
  }
}
