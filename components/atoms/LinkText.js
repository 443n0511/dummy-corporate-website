import { memo } from "react";
import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const LinkText = memo(({ href, children }) => {
  return (
    <Text
      py={4}
      fontSize={{ base: "lg", lg: "xl" }}
      w={{ base: "100%", md: "80%" }}
      textAlign='right'>
      <Link>
        <NextLink href={href}>{children}</NextLink>
      </Link>
    </Text>
  );
});
