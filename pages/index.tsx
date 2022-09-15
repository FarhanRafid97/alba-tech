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
  const seoDesc = `PT. Alba Digital Teknologi is a digital agency that has the tagline "Provide The Best Digital Experience for Your Business". We have to provide the best digital experience for our clients.
  Focus on creating websites and mobile applications is part of ALBA's services and has segmentation in digital communication marketing. Alba has helped several large companies to carry out business development and digital transformation."`;

  return (
    <Layout>
      <Head>
        <title>Home - Alba Tech</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={`${seoDesc}`} />
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
