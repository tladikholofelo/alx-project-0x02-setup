// components/common/UserCard.tsx
import { UserProps } from '../../interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
