import { Typography } from '@material-ui/core';
import Head from 'next/head';
import theme from 'shared/theme';

function HomePage() {
  return (
    <>
      <Head>
        <title>Pedia Lab</title>
      </Head>
      <Typography variant="h1" color="primary">
        Welcome to Next.js!
      </Typography>
    </>
  );
}

export default HomePage;
