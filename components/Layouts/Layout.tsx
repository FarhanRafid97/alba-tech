import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box pt="101px">{children}</Box>
    </>
  );
};

export default Layout;
