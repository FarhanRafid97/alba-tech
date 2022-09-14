import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import partners from './partners.json';
import Image from 'next/image';
import { useState } from 'react';
interface PartnerSectionProps {}

const PartnerSection: React.FC<PartnerSectionProps> = ({}) => {
  const [indexSelect, setIndexSelect] = useState(0);
  return (
    <Box w="full" mt={12}>
      <Flex w="80%" m="auto" overflow="hidden">
        <Flex
          minW="full"
          transition="1s"
          columnGap="30px"
          justifyContent="space-between "
          transform={`translateX(calc(-${indexSelect}00% ))`}
        >
          {partners.map((partner, i) => (
            <Box key={i} w="200px">
              <Image src={partner.image} width={200} height={200} alt={partner.alt} />
            </Box>
          ))}
        </Flex>
        <Flex
          minW="full"
          transition="1s"
          columnGap="30px"
          transform={`translateX(calc(-${indexSelect}00% ))`}
        >
          {partners.map((partner, i) => (
            <Box key={i} w="200px">
              <Image src={partner.image} width={200} height={200} alt={partner.alt} />
            </Box>
          ))}
        </Flex>
        <Flex
          minW="full"
          transition="1s"
          columnGap="30px"
          transform={`translateX(calc(-${indexSelect}00% ))`}
        >
          {partners.map((partner, i) => (
            <Box key={i} w="200px">
              <Image src={partner.image} width={200} height={200} alt={partner.alt} />
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex mt={4} justifyContent="center" w="full" columnGap="15px">
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            w="10px"
            onClick={() => setIndexSelect(index)}
            h="10px"
            transition="0.5s"
            borderRadius="50%"
            cursor="pointer"
            bg={indexSelect === index ? 'albaPrimary' : 'gray'}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PartnerSection;
