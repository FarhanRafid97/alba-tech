import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import portofolio from './listPortofolio.json';
import PortofolioCard from './PortofolioCard';
interface PortofolioSectionProps {}

const PortofolioSection: React.FC<PortofolioSectionProps> = ({}) => {
  return (
    <Box w="full" mt="64px">
      <Flex direction="column" px="15px" align="center" pt={4}>
        <Text color="#C4C4C4">Complet Package</Text>
        <Heading maxW="525px" textAlign="center" size="xl" mt="18px" mb="30px">
          The software that we build takes our client to next level
        </Heading>
        <Flex
          w={['90%', '100%', '100%', '80%']}
          flexWrap="wrap"
          justifyContent="center"
          gap={['20px 30px', '20px 30px', '20px 20px', '20px 30px']}
        >
          {portofolio.map((porto) => (
            <PortofolioCard key={porto.title} porto={porto} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PortofolioSection;
