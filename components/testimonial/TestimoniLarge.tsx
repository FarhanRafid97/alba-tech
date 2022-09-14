import { Box, Flex, Heading, Text } from '@chakra-ui/react';
interface TestimoniLargeProps {
  width: string[];
  title: string;
  body: string;
}

const TestimoniLarge: React.FC<TestimoniLargeProps> = ({ title, body, width }) => {
  return (
    <Box maxW={width}>
      <Heading>{title}</Heading>
      <Text fontSize={['18px', '18px', '20px', '20px']} mt={4}>
        {body}
      </Text>
      <Flex mt={4} columnGap="10px">
        <Box w="50px" h="50px" borderRadius="50%" bg="#C4C4C4" />
        <Box>
          <Text fontWeight="light">Matthijs Piest</Text>
          <Text fontWeight="light" color="#C4C4C4">
            Ceo At WieBetaaltWat
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimoniLarge;
