import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/shared/models/posts';


export const loadPostsRequest = createAction('[POST] Request');
export const loadPostsSuccess = createAction('[POST] Success', props<{allPosts: Post[]}>());
export const loadPostsError = createAction('[POST] Error', props<{errorCode: any}>());
