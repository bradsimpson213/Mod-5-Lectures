import someData from "../data" 

const LOAD_POSTS = "postsState/load_posts";
const SAVE_POST = 'postsState/save_posts'

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
});

export const savePosts = (post) => ({
    type: SAVE_POST,
    post
})

const initialState = { posts: someData };

const postsReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_POSTS:
        return {...state, ...action.posts}
    case SAVE_POST:
        return {...state, posts: [...state.posts, action.post ]}
    default:
      return state
  }
};

export default postsReducer;