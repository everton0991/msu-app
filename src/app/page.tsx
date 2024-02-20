import Header from '@/app/components/Header';
import Content from '@/app/components/Content';

export default function Home() {
  return (
    <main>
      <Header />

      <div className='flex max-w-[1030px] mx-auto p-6'>
        <Content />
      </div>
    </main>
  );
}
