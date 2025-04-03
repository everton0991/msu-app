import { revalidatePath } from 'next/cache';

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

  async function addUser(formData: FormData) {
    'use server';
    console.log('action');
    const name = formData.get('name');
    const res = await fetch(
      'https://67ec15aaaa794fb3222ccaf1.mockapi.io/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      }
    );

    const newUser = await res.json();
    revalidatePath('/mock-users');
    console.log('New user added:', newUser);
  }

  return (
    <div className='p-3 m-auto'>
      <h2 className='text-lg'>Users List</h2>
      <div className='flex flex-row w-full justify-between py-10 border-radius-2'>
        <form action={addUser} className='flex w-2/4 py-10 gap-4'>
          <input
            type='text'
            name='name'
            placeholder='New User'
            required
            className='border border-gray-300 rounded-md px-4 py-2  w-full'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white w-40 px-4 py-2 rounded'
          >
            Add User
          </button>
        </form>
      </div>
      <div className='grid grid-cols-4 gap-4 py-10 border-radius-2'>
        {users.map((user) => (
          <div
            key={user.id}
            className='text-black text-lg bg-gray-200 p-3 rounded-lg shadow-md'
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
