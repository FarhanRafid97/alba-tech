import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ButtonAlba from '../ButtonAlba';
import portofolio from './listPortofolio.json';
import PortofolioCard from './PortofolioCard';
interface PortofolioSectionProps {}

const PortofolioSection: React.FC<PortofolioSectionProps> = ({}) => {
  return (
    <Box w="full" mt="64px" id="portofolio-section">
      <Flex direction="column" px="15px" align="center" pt={4}>
        <Text color="#C4C4C4">Portofolio</Text>
        <Heading maxW="525px" textAlign="center" size="xl" mt="18px" mb="30px">
          The software that we build takes our client to next level
        </Heading>
        <Flex
          w={['90%', '100%', '100%', '80%']}
          flexWrap="wrap"
          justifyContent="center"
          gap={['20px 30px', '20px 30px', '20px 20px', '20px 30px']}
          mb="34px"
        >
          {portofolio.map((porto) => (
            <PortofolioCard key={porto.title} porto={porto} />
          ))}
        </Flex>
        <ButtonAlba text="Learn more" />
      </Flex>
    </Box>
  );
};

export default PortofolioSection;
