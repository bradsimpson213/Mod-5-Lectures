import { createContext, useContext, useState } from 'react';
import someData from "../data"


const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState(someData);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  ); 
}