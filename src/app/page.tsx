import Header from '@/app/components/Header';
import Content from '@/app/components/Content';
import { getData } from '@/app/actions';
import { cookies } from 'next/headers';

async function fetchData() {
  const authUrl = await getData();
  console.log({ authUrl });
  return { authUrl };
}

export default async function Home({
  searchParams: { code },
}: {
  searchParams: any;
}) {
  const authUrl = await fetchData();

  return (
    <main>
      <Header />

      <div className='flex max-w-[1030px] mx-auto p-6'>
        <Content
          authUrl={authUrl.href}
          codeVerifier={cookies().get('code_verifier')}
          code={code}
        />
      </div>
    </main>
  );
}
