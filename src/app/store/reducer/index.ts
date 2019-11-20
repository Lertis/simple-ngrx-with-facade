import { ActionReducerMap } from '@ngrx/store';
// States
import { PostsState } from '../state/post.state';
// Reducers
import { postsReducer } from './post.reducer';

export interface AppState {
    posts: PostsState;
}

export const allReducers: ActionReducerMap<AppState> = {
    posts: postsReducer
};
