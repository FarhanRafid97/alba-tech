import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
interface PortofolioCardProps {
  porto: {
    type: string;
    title: string;
    body: string;
    image: string;
  };
}

const PortofolioCard: React.FC<PortofolioCardProps> = ({ porto }) => {
  return (
    <Flex
      w="345px"
      direction="column"
      h="418px"
      rowGap="15px"
      border="1px solid #dbdbdb"
      boxShadow="md"
      cursor="pointer"
      borderRadius="10px"
      _hover={{ border: '1px solid #FFCE07', transition: '0.5s' }}
    >
      <Box>
        <Image src={porto.image} width={345} height={231} alt={`image for ${porto.title}`} />
      </Box>
      <Box px="20px">
        <Text color="#C4C4C4" fontSize="12px">
          {porto.type}
        </Text>
        <Heading mt="15px" color="albaPrimary" size="md">
          {porto.title}
        </Heading>
        <Text mt="10px" fontWeight="light" fontSize="14px">
          {porto.body}
        </Text>
      </Box>
    </Flex>
  );
};

export default PortofolioCard;
