import type { NextPage } from 'next';
import Layout from '../components/Layouts/Layout';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ProductSection from '../components/product/ProductSection';
import Tech from '../components/product/Tech';
import Progres from '../components/progres/Progres';
import PortofolioSection from '../components/portofolio/PortofolioSection';
import TestiSection from '../components/testimonial/TestiSection';
import PartnerSection from '../components/partner/PartnerSection';
import Consultation from '../components/consultation/Consultation';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home - Alba Tech</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={`${process.env.NEXT_PUBLIC_SEO_DESCRIPTION}`} />
        <link rel="shortcut icon" sizes="1x2" href="/assets/logo.png" />
      </Head>
      <Box bgImage="/assets/texutre.png" bgRepeat="no-repeat">
        <Hero />
        <ProductSection />
        <Tech />
        <Progres />
        <PortofolioSection />
        <TestiSection />
        <PartnerSection />
        <Consultation />
      </Box>
    </Layout>
  );
};

export default Home;
