import { Link, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import NextLink from "next/link";
import React from "react";
export const Pagination = ({ totalCount }) => {
  const router = useRouter();
  const PER_PAGE = 5;
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const href = (number) => (number === 1 ? `/news` : `/news/page/${number}`);
  return (
    <Flex justifyContent='center' gridGap={5}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
        <NextLink key={number} href={href(number)} passHref>
          <Box
            as='a'
            borderRadius='50%'
            w={14}
            h={14}
            p={4}
            transition='0.2s'
            boxShadow='base'
            bg={router.asPath === href(number) ? "gray.400" : "white"}
            _hover={{ bg: "gray.400" }}>
            {number}
          </Box>
        </NextLink>
      ))}
    </Flex>
  );
};
