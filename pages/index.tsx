import Head from 'next/head';
import IndexPage from 'pedialab-index/IndexPage';

function HomePage() {
  return (
    <>
      <Head>
        <title>Pedia Lab</title>
      </Head>
      <IndexPage />
    </>
  );
}

export default HomePage;
