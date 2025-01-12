// pages/index.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Project Setup</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to the Next.js Project!</h1>
      </main>
    </div>
  );
}
