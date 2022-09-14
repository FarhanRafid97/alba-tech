import { Tooltip, Button, Text, Flex, Heading, Box } from '@chakra-ui/react';
import Image from 'next/image';
import techs from './techstacks.json';

interface TechProps {}

const Tech: React.FC<TechProps> = ({}) => {
  return (
    <Flex justifyContent="center" w="100%" m="auto" mt={16}>
      <Flex
        gap={['30px', '40px', '70px', '105px']}
        w={['100%', '100%', '80%', '80%']}
        flexWrap="wrap"
        px="40px"
        justifyContent={['center', 'center', 'center', 'start']}
      >
        {techs.map((t, i) => (
          <Tooltip label={t.name} key={i}>
            <Box cursor="pointer" w={['40px', '50px', '70px', '90px']}>
              <Image width={91} height={91} src={t.image} alt={`image stack`} />
            </Box>
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
};

export default Tech;
