import '../../index.css'
import { mdiHanger } from '@mdi/js'
import Icon from '@mdi/react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import React, { useState, useEffect } from 'react';
import { useAuth } from 'src/auth'

const initialPostsData = [
  {
    id: 1,
    user: "user1",
    image: "https://via.placeholder.com/390x390",
    description: "This is a description for post 1",
    likes: 0,

  },
  {
    id: 2,
    user: "user2",
    image: "https://via.placeholder.com/390x390",
    description: "This is a description for post 2",
    likes: 0,
  },
  {
    id: 3,
    user: "user3",
    image: "https://via.placeholder.com/390x390",
    description: "This is a description for post 3",
    likes: 0,
  },
];

const HubPage = () => {
  const { isAuthenticated } = useAuth();


  const loadPostsFromLocalStorage = () => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : initialPostsData;
  }

  const [posts, setPosts] = useState(loadPostsFromLocalStorage);
  const [likedPosts, setLikedPosts] = useState(posts.map(() => false));

  useEffect(() => {
    // Save posts to local storage whenever they change
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleClick = () => {

  };

  const handleLike = (index) => {
    if (!likedPosts[index]) {
      const newPosts = [...posts];
      newPosts[index].likes += 1;
      setPosts(newPosts);

      const newLikedPosts = [...likedPosts];
      newLikedPosts[index] = true;
      setLikedPosts(newLikedPosts);
    }
  };


  return (
    <>
    <Metadata title="Home" description="Home page" />

    <div className="my-auto">
      <h2 className="p-4 px-4 text-2xl font-bold">Fits</h2>
    </div>

    <div className="carousel carousel-vertical rounded-box w-full ">

    {posts.map((post, index) => (
      <div key={post.id} className="carousel-item w-full h-full mb-8 flex flex-col items-center">
        <div className="card max-w-sm w-11/12 bg-postColor shadow-xl relative">
          <figure>
            <img src={post.image} alt={post.description} className="w-full h-64 object-cover" />
          </figure>
          <div className="card-body">
          <button className="absolute right-4 bottom-19 bg-white rounded-full p-2 shadow-md" onClick={() => handleLike(index)}
                disabled={likedPosts[index]}>
              👍

            </button>
            <h2 className="card-title">{post.user}</h2>

f
            <p>{post.description}</p>
            <p className="absolute right-5 mt-12 bg-white rounded-full px-2 py-1 shadow-md">{post.likes}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
    <div> // Need to link this to route to fit page. Also this needs to be in its own page. Temporarily on main page.
    
    <Link
            to={routes.fits()}
            className = "fixed bottom-4 right-4 bg-blue-500 rounded-full p-4 shadow-md"
            // className="btn rounded-3xl bg-primary px-24 py-16 pt-8 text-2xl hover:bg-neutral"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
          </Link>
    
    
    </div>





    {/* <div className="flex justify-between">
      <div className="m-2 flex-1 bg-gray-200 p-4 text-center">Box 1</div>
      <div className="m-2 flex-1 bg-gray-200 p-4 text-center">Box 2</div>

    </div>

    <div className="flex justify-between">
      <div className="m-2 flex-1 bg-gray-200 p-4 text-center">Box 3</div>
      <div className="m-2 flex-1 bg-gray-200 p-4 text-center">Box 4</div>

    </div> */}


    {/* <div className="mt-24 flex w-auto justify-center">
      <Link
        to={routes.main()}
        className="btn rounded-3xl bg-primary px-24 py-16 pt-8 text-2xl hover:bg-neutral"
      >
        work on main page
      </Link>
    </div> */}
  </>
  )
}

export default HubPage;