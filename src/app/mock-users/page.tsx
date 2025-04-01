interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    'https://67ec15aaaa794fb3222ccaf1.mockapi.io/users'
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const users: User[] = await response.json();

  return (
    <div className='p-3 m-auto'>
      <h2 className='text-lg'>Users List</h2>
      <ul className='border-radius-2'>
        {users.map((user) => (
          <li
            key={user.id}
            className='text-black text-lg mt-5 mb-5 bg-gray-200 p-3 rounded-lg shadow-md'
          >
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
