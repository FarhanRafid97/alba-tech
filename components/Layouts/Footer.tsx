import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import Image from 'next/image';
import navMenu from './navMenu.json';
import navbarStyle from './navbar.module.css';
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <Flex
        w={['90%', '90%', '80%', '80%']}
        minH="412px"
        borderTop="1px"
        borderBottom="1px"
        direction={['column', 'column', 'column', 'row']}
        m="auto"
        rowGap="35px"
        justifyContent={['center', 'center', 'space-between', 'space-between']}
        p={['60px 19px', '60px 19px', '40px 19px', '60px 69px']}
      >
        <Box w={['230px', '300px', '300px', '400px']}>
          <Box>
            <Image src="/assets/logo.png" width="124.78px" height="55.57px" alt="logo alba tech" />
          </Box>
          <Text mt="35.48px" fontSize="15px" mb="56.9px">
            Alba acts as coporate partner to help digitize their business to accelertae trends in
            remote work.
          </Text>

          <Image src="/assets/footer/sosmed.png" width="115px" height="22px" alt="logo alba tech" />
        </Box>
        <Box mr="auto">
          <Text fontWeight="bold">Website</Text>
          <Flex direction="column" mt="41px" rowGap={['30.95px', '20.95px', '20.95px', '30.95px']}>
            {navMenu.map((menu) => (
              <Text fontSize="14px" cursor="pointer" key={menu.name}>
                {menu.name}
              </Text>
            ))}
          </Flex>
        </Box>
        <Box w="245px" ml={['0', '0', '0', '15px']}>
          <Text fontWeight="bold">Contact</Text>
          <Text mt="41px" fontSize={['12px', '12px', '12px', '14px']}>
            The Prominence Block 38D No.25 jl.jalur Sutera Barat,Alam Sutera,Kota Tangerang,Banten
            15143
          </Text>
          <Text mt="22.36px" fontSize="14px">
            <b>P:</b> +62 81 1889 3383
          </Text>
          <Text mt="22.36px" fontSize="14px">
            <b>E:</b> info@albatech.id
          </Text>
        </Box>
      </Flex>
      <Flex
        w={['90%', '90%', '80%', '80%']}
        color="#C4C4C4"
        fontSize={['8px', '9px', '14px', '16px']}
        m="auto"
        mt="24px"
        mb="55px"
        alignItems="center"
        direction={['column', 'row', 'row', 'row']}
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <AiOutlineCopyrightCircle />
          PT.Alba Digital Teknologi 2021 | All Rights Reserved
        </Flex>
        <Text>Privacy policy | Term of servidce</Text>
      </Flex>
    </>
  );
};

export default Footer;
