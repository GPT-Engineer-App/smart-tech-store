import { Grid, useBreakpointValue } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  const gridColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" });

  return (
    <Grid templateColumns={gridColumns} gap={6}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
