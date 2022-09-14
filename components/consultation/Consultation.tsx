import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ButtonAlba from '../ButtonAlba';
interface ConsultationProps {}

const Consultation: React.FC<ConsultationProps> = ({}) => {
  return (
    <Flex
      direction="column"
      w="80%"
      m="auto"
      mt={60}
      h="223px"
      alignItems="center"
      justifyContent="space-between"
      p="32px"
      bg="albaPrimary"
      borderRadius="8px"
    >
      <Text>Is software important for your business?</Text>
      <Text>Build With Albatech</Text>
      <ButtonAlba text="Consultation Now" borderColor="black" />
    </Flex>
  );
};

export default Consultation;
