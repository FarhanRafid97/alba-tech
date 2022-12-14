import { Button, Text, Flex, Box } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';
import ButtonAlba from '../ButtonAlba';
import MenuNavMobile from './MenuNavMobile';

import navMenu from './navMenu.json';
import navbarStyle from './navbar.module.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      bg="white"
      position="fixed"
      zIndex="99"
      w="full"
      h="100px"
      align="center"
      borderBottom="1px solid #dbdbdb"
      boxShadow="md"
    >
      <Flex w={['90%', '90%', '90%', '80%']} m="auto" justify="space-between" alignItems="center">
        <Link href="/" passHref>
          <Box cursor="pointer" w={['80px', '80px', '110px', 125]}>
            <Image
              width={125}
              height={56}
              src="/assets/logo.png"
              alt={`logo PT Alba Digital Tecnology`}
            />
          </Box>
        </Link>
        <Flex
          align="center"
          columnGap={['15px', '15px', '25px', '55px']}
          fontSize={['14px', '14px', '16px', '16px']}
        >
          {navMenu.map((menu) => (
            <Link key={menu.name} href={`/${menu.name}`}>
              <Text
                position="relative"
                cursor="pointer"
                className={navbarStyle.navigasiLink}
                display={['none', 'none', 'flex', 'flex']}
              >
                {menu.name}
              </Text>
            </Link>
          ))}

          <ButtonAlba text="Contact Us" />
          <Box fontSize="2xl" display={['flex', 'flex', 'none', 'none']}>
            <MenuNavMobile />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
