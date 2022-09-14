import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ButtonAlba from '../ButtonAlba';
interface ConsultationProps {}

const Consultation: React.FC<ConsultationProps> = ({}) => {
  return (
    <Flex
      direction="column"
      w="80%"
      m="auto"
      mt={['30px', '60px']}
      mb="48px"
      h="223px"
      alignItems="center"
      justifyContent="space-between"
      p="32px"
      bg="albaPrimary"
      borderRadius="15px"
    >
      <Text textAlign="center" fontSize={['12px', '14px', '14px', '16px']}>
        Is software important for your business?
      </Text>
      <Text fontSize={['12px', '28px', '32px', '38px']}>Build With Albatech</Text>
      <ButtonAlba text="Consultation Now" borderColor="black" />
    </Flex>
  );
};

export default Consultation;
