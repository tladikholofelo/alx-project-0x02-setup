// components/common/PostModal.tsx
import { useState } from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

const PostModal = ({ isOpen, onClose, onSave }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 w-full"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded ml-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
