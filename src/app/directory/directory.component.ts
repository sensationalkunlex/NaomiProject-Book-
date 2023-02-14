import { Component, OnInit } from '@angular/core';
import { LinkService } from ''
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private linkService: LinkService, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark): void {
    this.bookmarkService.addToBookmarks(bookmark);
    alert("Added!");
  }

}

  ngOnInit(): void {
  }

}
