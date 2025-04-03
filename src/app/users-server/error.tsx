'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-red-600'>Error</h1>
        <p className='mt-4'>{error.message}</p>
        <button
          onClick={() => reset()}
          className='mt-6 px-4 py-2 bg-blue-500 text-white rounded'
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
