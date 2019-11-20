import { Injectable } from '@angular/core';
// NGRX
import { Store, select } from '@ngrx/store';
// State
import { AppState } from 'src/app/store/reducer';
// Selectors
import { getAllPosts } from 'src/app/store/reducer/post.reducer';
// RxJS
import { Observable } from 'rxjs';
// Models
import { Post } from '../../models/posts';
// Actions
import * as postsActions from './../../../store/actions/post.actions';


@Injectable()
export class Facade {

  allPosts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
    this.allPosts$ = store.pipe(select(getAllPosts));
  }

  loadPosts() {
    this.store.dispatch(postsActions.loadPostsRequest());
  }
}
