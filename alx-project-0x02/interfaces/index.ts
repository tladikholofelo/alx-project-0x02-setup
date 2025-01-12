// interfaces/index.ts
export interface CardProps {
    title: string;
    content: string;
  }

// interfaces/index.ts
export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
  }

// interfaces/index.ts
export interface PostProps {
    title: string;
    content: string;
    userId: number;
  }

// interfaces/index.ts
export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }
  