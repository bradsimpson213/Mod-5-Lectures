
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


export const getAllPosts = () => async (dispatch) => {
  const response = await fetch('/api/posts/all');

  if (response.ok) {
    const { posts } = await response.json();
    dispatch(loadPosts(posts));
    return posts;
  } else {
    console.log("there was an error fetching!")
  }
};


export const createPost = (post) => async (dispatch) => {
  const response = await fetch("/api/posts/new", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post)
  });
  console.log("RESPONSE FROM SERVER", response)

  if (response.ok) {
      const { resPost } = await response.json();
      console.log("NEW POST DATA", resPost);
      dispatch(savePosts(resPost));
      return true
  } else {
      const { error } = await response.json();
      alert(`There was an error: ${error.title} `)
      return error
  }
};



const initialState = { posts: {} };

const postsReducer = (state = initialState, action) => {
  let newState = {}
  switch(action.type){
    case LOAD_POSTS:
      newState = {...state};
      action.posts.forEach((post) => (newState.posts[post.id.toString()] = post));
      console.log("NEWSTATE-LOADPOST", newState)
      return newState;
        // return {...state, posts: [...action.posts]}
    case SAVE_POST:
      newState = {...state}
      newState.posts[action.post.id] = action.post
      console.log("NEWSTATE-SAVEPOST", newState)
      return newState;
    default:
      return state
  }
};

export default postsReducer;