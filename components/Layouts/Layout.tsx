import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box pt="101px">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
