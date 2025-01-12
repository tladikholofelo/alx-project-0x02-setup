// pages/posts.tsx
import { useEffect, useState } from 'react';
import PostCard from '../../alx-project-2/components/common/PostCard';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="space-y-4">
        {posts.map((post: { title: string; body: string; userId: number; id: number }) => (
          <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
