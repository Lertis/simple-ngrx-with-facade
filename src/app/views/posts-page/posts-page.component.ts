import { Component, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
// Models
import { Post } from 'src/app/shared/models/posts';
// Facade
import { Facade } from 'src/app/shared/services/facade/facade.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private facade: Facade) {
    this.posts$ = this.facade.allPosts$;
  }

  ngOnInit() {
  }

}
