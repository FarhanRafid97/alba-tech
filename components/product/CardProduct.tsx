import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
interface CardProductProps {
  product: {
    title: string;
    body: string;
    image: string;
    width: string;
    height: string;
  };
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <Box
      bg="white"
      borderRadius="6px"
      w="344px"
      height="193px"
      p="15px"
      boxShadow="md"
      border="1px solid #dbdbdb"
      _hover={{ border: '1px solid #FFCE07', transition: '0.5s' }}
    >
      <Box h="65px">
        <Image
          src={product.image}
          width={product.width}
          height={product.height}
          alt={'productuct image'}
        />
      </Box>
      <Text mt="10px" color="#FFCE07" fontWeight="bold">
        {product.title}
      </Text>
      <Text mt="10px"> {product.body}</Text>
    </Box>
  );
};

export default CardProduct;
