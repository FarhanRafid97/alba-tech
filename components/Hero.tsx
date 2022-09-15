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
      alignItems="start"
    >
      <Box
        m="auto"
        zIndex="5"
        w={['', '', 'full', '927px']}
        position={['relative', 'relative', 'relative', 'absolute']}
        right="0"
      >
        <Image
          width={928}
          src="/assets/Rectangle-1893.png"
          height={564}
          alt="image hero home page"
        />
      </Box>
      <Box
        position="absolute"
        display={['none', 'none', 'none', 'block']}
        right="300px"
        bottom={['1px']}
      >
        <Image width={369} src="/assets/Group-32.png" height={66} alt="image hero home page" />
      </Box>
      <Box position="absolute" right="900px" top="55px">
        <Image width={81} src="/assets/Group-3.png" height={66} alt="image hero home page" />
      </Box>
      <Flex
        zIndex="9"
        direction="column"
        rowGap="15px"
        w="80%"
        m="auto"
        alignItems={['center', 'center', 'center', 'start']}
        right={['0', '0', '0', '640px']}
        top={['', '', '0', '110px']}
      >
        <Text
          textAlign={['center', 'center', 'center', 'start']}
          p={['', '', '', '5px 20px 5px 13px']}
          textShadow="0px 3px 4px rgb(0,0,0, 0.5)"
          fontSize={['36px', '43px', '60px', '60px']}
          fontWeight="800"
          bg={['', '', 'none', 'white']}
        >
          Build or scale up
        </Text>

        <Text p="5px 13px" fontSize={['22px', '22px', '38px', '63px']}>
          Your development team
        </Text>

        <Flex
          ml={[0, 0, 0, 4]}
          align="center"
          direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
          gap="15px"
        >
          <Box w="75px" h="5px" bg="albaPrimary"></Box>
          <Text>In weeks, not months</Text>
        </Flex>
        <ButtonAlba text="Book Now" />
      </Flex>
    </Flex>
  );
};

export default Hero;
