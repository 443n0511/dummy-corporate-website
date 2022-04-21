import { Box, Link, Flex, Text, Grid, VStack } from "@chakra-ui/react";
import { memo } from "react";
import NextLink from "next/link";
export const Footer = memo(() => {
  return (
    <Box as='footer' mt='auto'>
      <VStack
        pt={10}
        pb={10}
        bgColor='gray.900'
        color='white'
        spacing={20}
        align='center'>
        <Grid
          as='nav'
          fontWeight='bold'
          templateColumns='repeat(3, 1fr)'
          gap={4}>
          <NextLink href={"/"} passHref>
            <Link>商品一覧</Link>
          </NextLink>
          <NextLink href={"/"} passHref>
            <Link>お知らせ</Link>
          </NextLink>
          <NextLink href={"/"} passHref>
            <Link>お問い合わせ</Link>
          </NextLink>
        </Grid>
        <Text as='small'>&copy;{new Date().getFullYear()} 株式会社Sample</Text>
      </VStack>
    </Box>
  );
});
