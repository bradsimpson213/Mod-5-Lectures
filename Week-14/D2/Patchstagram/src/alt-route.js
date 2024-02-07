const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      element: <Layout />,
      children: [
        {
          path:'posts',
          // element: <Feed data={ someData } />,
          element: <Outlet />,
          children:[
            {
              index: true,
              element: <Feed data={ someData }/>
            },
            {
              path: "posts/:postId",
              element: <PostDetails data={ someData } />
            },
            
          ]
        },
        {
          path: 'new',
          element: <PostForm />
        },
      ]
    },
    {
      path: '*',
      element: <h1>Page Not Found</h1>
    }
  ]);