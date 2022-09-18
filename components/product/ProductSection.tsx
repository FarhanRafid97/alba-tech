import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import CardProduct from './CardProduct';
import products from './listProducts.json';
interface ProductProps {}

const ProductSection: React.FC<ProductProps> = ({}) => {
  return (
    <Box w="full" mt={20}>
      <Flex direction="column" align="center" pt={4}>
        <Text color="#C4C4C4">Complet Package</Text>
        <Heading textAlign="center" w="85%" size="lg" mt="18px" mb="30px">
          From product design to software continuous delivery
        </Heading>
        <Flex
          w={['90%', '100%', '100%', '80%']}
          flexWrap="wrap"
          px={['15px', '15px', '15px', '0']}
          justifyContent="center"
          gap={['20px 30px', '20px 30px', '20px 20px', '20px 30px']}
        >
          {products.map((product, i) => (
            <CardProduct key={i} product={product} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductSection;
