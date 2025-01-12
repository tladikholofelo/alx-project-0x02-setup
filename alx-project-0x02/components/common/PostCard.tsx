// components/common/PostCard.tsx
import { PostProps } from '../../interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
