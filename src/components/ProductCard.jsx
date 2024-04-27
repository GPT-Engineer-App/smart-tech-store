import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={product.imageUrl} alt={product.name} />
      <VStack align="stretch" mt={4}>
        <Heading as="h3" size="lg">
          {product.name}
        </Heading>
        <Text>{product.description}</Text>
        <Text fontWeight="bold">{product.price}</Text>
        <Flex justify="space-between" align="center">
          <Button leftIcon={<FaPlus />} colorScheme="blue">
            Add to Cart
          </Button>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => alert("Shared on Facebook")}>
              <FaFacebook />
            </Button>
            <Button onClick={() => alert("Shared on Twitter")}>
              <FaTwitter />
            </Button>
            <Button onClick={() => alert("Shared on Instagram")}>
              <FaInstagram />
            </Button>
          </Stack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProductCard;
