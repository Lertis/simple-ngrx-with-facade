// Model
import { Post } from 'src/app/shared/models/posts';

export interface PostsState {
    posts: Post[];
    loading: boolean;
    loaded: boolean;
    errors: any;
}

export const initialPostsState: PostsState = {
    posts: [],
    loaded: null,
    loading: null,
    errors: null
};
