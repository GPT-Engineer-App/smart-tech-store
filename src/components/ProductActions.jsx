import { Button, Flex } from "@chakra-ui/react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const ProductActions = () => {
  return (
    <Flex justify="space-between" p={4} borderWidth="1px" borderRadius="lg" mt={10}>
      <Button leftIcon={<FaEdit />} colorScheme="yellow">
        Edit Product
      </Button>
      <Button leftIcon={<FaTrash />} colorScheme="red">
        Remove Product
      </Button>
    </Flex>
  );
};

export default ProductActions;
