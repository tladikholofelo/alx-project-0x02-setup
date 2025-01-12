// components/common/Card.tsx
import { CardProps } from '../../interfaces';

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
