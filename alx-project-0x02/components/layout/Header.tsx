// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="text-white hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-white hover:text-blue-500">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
