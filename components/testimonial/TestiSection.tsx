import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import TestimoniLarge from './TestimoniLarge';
import TestimoniMini from './TestimoniMini';
import Image from 'next/image';
interface TestiSectionProps {}

const TestiSection: React.FC<TestiSectionProps> = ({}) => {
  return (
    <Box
      position="relative"
      // bg={['red.100', 'blue.100', 'red.100', 'blue.100']}
      w="full"
      mt="65px"
      minH="90vh"
      px="15px"
    >
      <Box position="absolute" left="45px" top="100px">
        <Image width={181} src="/assets/testi/Petik.png" height={142} alt="image hero home page" />
      </Box>
      <Box position="absolute" left="0" bottom={['250px', '250px', '0', '70px']}>
        <Image width={81} src="/assets/testi/graydot.png" height={66} alt="image hero home page" />
      </Box>
      <Box
        position="absolute"
        left={['43%', '62%', '44%', '43%']}
        bottom={['59%', '69%', '50%', '59%']}
        zIndex="-1"
      >
        <Image width={81} src="/assets/testi/dot.png" height={66} alt="image hero home page" />
      </Box>
      <Box
        position="absolute"
        right={['165px', '45px', '85px', '165px']}
        bottom={['105px', '10px', '75px', '100px']}
      >
        <Image
          width={181}
          src="/assets/testi/reversePetik.png"
          height={142}
          alt="image hero home page"
        />
      </Box>
      <Flex direction="column" px="15px" align="center" pt={4}>
        <Text color="#C4C4C4">Testimonials</Text>
        <Heading maxW="452" textAlign="center" size="lg" mt="18px" mb="30px">
          What clients love in working with albatech team
        </Heading>
        <Flex
          w={['90%', '100%', '90%', '80%']}
          flexWrap="wrap"
          justifyContent="center"
          gap={['20px 30px', '20px 30px', '20px 20px', '20px 30px']}
          mb="34px"
        >
          <Flex w="full" rowGap="67px" flexDirection={['column', 'column', 'row', 'row']}>
            <Flex
              direction="column"
              rowGap="67px"
              h="full"
              flex={['1', '1', '1.3', '1.6']}
              position="relative"
            >
              <TestimoniLarge
                width={['477px']}
                title="Amazing people"
                body={`"They are people who are no only following the task,but can work as a team,Together."`}
              />
              <TestimoniMini />
              <Box
                w="338px"
                position={['relative', 'relative', 'relative', 'absolute']}
                bottom={['none', 'none', 'none', '-70px']}
                right={['none', 'none', 'none', '50px']}
              >
                <Heading size="md">Amazing people</Heading>
                <Text fontSize="13px">{`"They are people who are no only following the task, but can work as a team,Together."`}</Text>
                <Box mt={4}>
                  <Text fontWeight="light">Matthijs Piest</Text>
                  <Text fontWeight="light" color="#C4C4C4">
                    Ceo At WieBetaaltWat
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex direction="column" flex="1" rowGap="79px">
              <TestimoniMini />
              <TestimoniLarge
                width={['508px']}
                title="Partnership approach"
                body={`"we felt like we had a true partner throughout the precess. They were clearly interested on our long-term success."`}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TestiSection;
