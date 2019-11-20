import { Injectable } from '@angular/core';
// NGRX
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
// Service
import { FetchService } from 'src/app/shared/services/fetch/fetch.service';
// Actions
import * as postsActions from './../actions/post.actions';
// Model
import { Post } from 'src/app/shared/models/posts';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private fetchService: FetchService) {}

  loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType(postsActions.loadPostsRequest),
      exhaustMap(() =>
          this.fetchService.getPosts().pipe(
              map((posts: Post[]) => postsActions.loadPostsSuccess({ allPosts : posts })),
              catchError(error => of(postsActions.loadPostsError({ errorCode: error }))))
          )
      )
  );
}
