import type { NextPage } from 'next';
import Layout from '../components/Layouts/Layout';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ProductSection from '../components/product/ProductSection';
import Tech from '../components/product/Tech';
import Progres from '../components/progres/Progres';
import PortofolioSection from '../components/portofolio/PortofolioSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box bgImage="/assets/texutre.png" bgRepeat="no-repeat">
        <Hero />
        <ProductSection />
        <Tech />
        <Progres />
        <PortofolioSection />
      </Box>
    </Layout>
  );
};

export default Home;
