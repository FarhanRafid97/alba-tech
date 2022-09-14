import { Button, Text, Flex, Heading, Box } from '@chakra-ui/react';
import Image from 'next/image';
import ButtonAlba from './ButtonAlba';
interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Flex
      w="full"
      position="relative"
      flexDirection="column"
      minH="600px"
      mt={['15px', '35px', '55px', '100px']}
      pb={4}
      alignItems="center"
    >
      <Box
        m="auto"
        zIndex="5"
        w={['', '', 'full', '927px']}
        position={['relative', 'relative', 'relative', 'absolute']}
        right="0"
      >
        <Image
          width={1000}
          src="/assets/Rectangle-1893.png"
          height={565}
          alt="image hero home page"
        />
      </Box>
      <Box
        position="absolute"
        display={['none', 'none', 'none', 'block']}
        right="300px"
        bottom={['35px']}
      >
        <Image width={369} src="/assets/Group-32.png" height={66} alt="image hero home page" />
      </Box>
      <Box position="absolute" right="900px" top="70px">
        <Image width={81} src="/assets/Group-3.png" height={66} alt="image hero home page" />
      </Box>
      <Flex
        zIndex="9"
        direction="column"
        rowGap="15px"
        alignItems={['center', 'center', 'center', 'start']}
        position={['relative', 'relative', 'relative', 'absolute']}
        right={['0', '0', '0', '48%']}
        top={['', '', '0', '150px']}
      >
        <Heading
          w={['', '', '', '469px']}
          textAlign={['center', 'center', 'center', 'start']}
          p={['', '', '', '5px 0px 8px 13px']}
          size="2xl"
          bg={['', '', 'none', 'white']}
        >
          Build or scale up
        </Heading>

        <Text p="5px 13px" fontSize={['28px', '28px', '38px', '48px']}>
          Your development team
        </Text>

        <Flex
          align="center"
          direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
          gap="15px"
        >
          <Box w="50px" h="4px" bg="#FFCE07"></Box>
          <Text>In weeks, not months</Text>
        </Flex>
        <ButtonAlba text="Book Now" />
      </Flex>
    </Flex>
  );
};

export default Hero;
