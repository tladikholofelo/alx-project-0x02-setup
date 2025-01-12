// components/common/Button.tsx
import { ButtonProps } from '../../interfaces';

const Button = ({ size, shape, children, onClick }: ButtonProps) => {
  let sizeClasses = '';
  let shapeClasses = '';

  // Set size classes
  switch (size) {
    case 'small':
      sizeClasses = 'px-4 py-2 text-sm';
      break;
    case 'medium':
      sizeClasses = 'px-6 py-3 text-base';
      break;
    case 'large':
      sizeClasses = 'px-8 py-4 text-lg';
      break;
  }

  // Set shape classes
  switch (shape) {
    case 'rounded-sm':
      shapeClasses = 'rounded-sm';
      break;
    case 'rounded-md':
      shapeClasses = 'rounded-md';
      break;
    case 'rounded-full':
      shapeClasses = 'rounded-full';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses} ${shapeClasses} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {children}
    </button>
  );
};

export default Button;
