import { Box, Flex, Heading, Text } from '@chakra-ui/react';
interface TestimoniMiniProps {}

const TestimoniMini: React.FC<TestimoniMiniProps> = ({}) => {
  return (
    <Box maxW="338px">
      <Heading size="md">Amazing people</Heading>
      <Text fontSize="13px">{`"They are people who are no only following the task, but can work as a team,Together."`}</Text>
      <Box mt={4}>
        <Text fontWeight="light">Matthijs Piest</Text>
        <Text fontWeight="light" color="#C4C4C4">
          Ceo At WieBetaaltWat
        </Text>
      </Box>
    </Box>
  );
};

export default TestimoniMini;
