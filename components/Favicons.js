import Head from 'next/head';

export default function Favicons() {
  return (
    <Head>
      <link rel="icon" href="/favicons/favicon-32x32.png" />
      <link
        rel="icon"
        href="/favicons/favicon-32.svg"
        type="image/svg+xml"
      />
      <link
        rel="apple-touch-icon"
        href="/favicons/apple-touch-icon-180x180.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
  );
}
