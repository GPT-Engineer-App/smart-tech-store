// Complete the Index page component for a store front website for laptops, phones, and accessories
import { Box, Button, Container, Flex, Grid, Heading, Image, Input, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  // Placeholder data for products
  const products = [
    {
      id: 1,
      name: "Laptop Pro 2023",
      price: "$999",
      description: "High performance laptop with 16GB RAM and 512GB SSD.",
      imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3B8ZW58MHx8fHwxNzE0MjEwODgwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Smartphone X",
      price: "$499",
      description: "Latest smartphone with 5G technology and 128GB storage.",
      imageUrl: "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8fHx8MTcxNDIxMDg4MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Headphones Beat",
      price: "$199",
      description: "Noise cancelling headphones with 12 hours battery life.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzfGVufDB8fHx8MTcxNDIxMDg4MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  // Responsive grid columns
  const gridColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" });

  return (
    <Container maxW="container.xl">
      <Heading as="h1" my={8} textAlign="center">
        Tech Store
      </Heading>
      <Grid templateColumns={gridColumns} gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
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
        ))}
      </Grid>
      <Flex justify="center" my={10}>
        <Button leftIcon={<FaPlus />} colorScheme="green" size="lg">
          Add New Product
        </Button>
      </Flex>
      <Flex justify="space-between" p={4} borderWidth="1px" borderRadius="lg" mt={10}>
        <Button leftIcon={<FaEdit />} colorScheme="yellow">
          Edit Product
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme="red">
          Remove Product
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
