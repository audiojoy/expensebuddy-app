import Head from 'next/head';
import Footer from 'components/Footer.js';
import CTA from 'components/CTA.js';
import Testimonials from 'components/Testimonials.js';
import Features2 from 'components/Features2.js';
import Features1 from 'components/Features1.js';
import Header from 'components/Header.js';
import Hero from 'components/Hero.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Expense Buddy - The expense tracking app you are looking for
        </title>
        <meta
          name="title"
          content="Expense Buddy - The expense tracking app you are looking for"
        />
        <meta
          name="description"
          content="Expense Buddy is one of the most elegant expense and budget trackers available. This buddy is here to assist you with an interactive, personalized chart that shows all history and one-touch expense logging. All of which makes your expenses tracking and budgeting effortless than ever."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://expensebuddy.app/" />
        <meta
          property="og:title"
          content="Expense Buddy - The expense tracking app you are looking for"
        />
        <meta
          property="og:description"
          content="Expense Buddy is one of the most elegant expense and budget trackers available. This buddy is here to assist you with an interactive, personalized chart that shows all history and one-touch expense logging. All of which makes your expenses tracking and budgeting effortless than ever."
        />
        <meta
          property="og:image"
          content="https://expensebuddy.app/assets/poster.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://expensebuddy.app/" />
        <meta
          property="twitter:title"
          content="Expense Buddy - The expense tracking app you are looking for"
        />
        <meta
          property="twitter:description"
          content="Expense Buddy is one of the most elegant expense and budget trackers available. This buddy is here to assist you with an interactive, personalized chart that shows all history and one-touch expense logging. All of which makes your expenses tracking and budgeting effortless than ever."
        />
        <meta
          property="twitter:image"
          content="https://expensebuddy.app/assets/poster.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />
      <Hero />
      <Features1 />
      <Features2 />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
