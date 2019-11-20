import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
// State
import { PostsState, initialPostsState } from '../state/post.state';
// Actions
import * as postsActions from './../actions/post.actions';


const featureReducer = createReducer(
    initialPostsState,
    on(postsActions.loadPostsRequest, state => (
        {
            ...state,
            posts: [],
            loading: true,
            loaded: false,
            errors: null
        }
    )),
    on(postsActions.loadPostsSuccess, (state, { allPosts }) => (
        {
            ...state,
            posts: allPosts,
            loading: true,
            loaded: false,
            errors: null
        }
    )),
    on(postsActions.loadPostsError, (state, { errorCode }) => (
        {
            ...state,
            loading: true,
            loaded: false,
            errors: errorCode
        }
    ))
);

export function postsReducer(state: PostsState | undefined, action: Action) {
    return featureReducer(state, action);
}

export const allPostsState = createFeatureSelector<PostsState>('posts');

export const getAllPosts = createSelector(
allPostsState,
  (state: PostsState) => state.posts
);

