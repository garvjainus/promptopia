'use client';

import { useState, useEffect} from 'react'

import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
       return(
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      );
       })}
    </div>
  )
}
const Feed = () => {
  const[searchText, setSearchText] = useState('');
  const[posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  const newPosts = posts.filter((post) => {
    return (  
      post.creator.email.toLowerCase().includes(searchText.toLowerCase()) || 
      post.creator.username.toLowerCase().includes(searchText.toLowerCase()) || 
      post.prompt.toLowerCase().includes(searchText.toLowerCase()) || 
      post.tag.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  

  return (
    <section className="feed">
      <form className="relative w-full flex-clenter">
        <input 
          type="text" 
          placeholder="Search for a tag or a username" 
          value={searchText} 
          onChange={handleSearchChange} 
          required 
          className="search_input peer">

        </input>
      </form>
      <PromptCardList
        data={newPosts}
        handleTagClick={(tag) => {setSearchText(tag)}}
      />
    </section>
  )
}

export default Feed