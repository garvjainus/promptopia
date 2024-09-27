"use client";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = ({params}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      if (session?.user.id) {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();
        setPosts(data);
      }
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile    
      name={userName + "'s"}
      desc={`Welcome to ${userName}'s personalized profile page. Learn from their prompts to improve!`}
      data={posts}
    />
  );
};

export default MyProfile;
