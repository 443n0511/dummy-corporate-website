import { memo } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const LinkButton = memo(({ href, children, margin }) => {
  return (
    <Button
      as='p'
      p={8}
      m={margin}
      borderRadius='full'
      variant='outline'
      colorScheme='gray.600'
      size={{ base: "md", lg: "lg" }}
      _hover={{ cursor: "pointer", bgColor: "gray.600", color: "white" }}
      rightIcon={<ArrowForwardIcon />}
      fontSize={{ base: "md", lg: "lg" }}>
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
});
