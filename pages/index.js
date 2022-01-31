import PageHead from 'components/Head.js';
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
      <PageHead />
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
