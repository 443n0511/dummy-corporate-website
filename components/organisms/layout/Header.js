import { Box, Link, Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { animateScroll as scroll } from "react-scroll";

import NextLink from "next/link";
export const Header = memo(() => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Box as='header'>
      <Flex
        as='nav'
        bg='White'
        color='gray.900'
        align='center'
        position='fixed'
        zIndex='100'
        top={0}
        width='full'
        justify='space-between'
        py={{ base: 5, md: 8 }}
        px={{ base: 7, md: 10 }}>
        <Flex align='center' _hover={{ cursor: "pointer", color: "gray.900" }}>
          <Heading
            as='h1'
            href='/'
            fontSize={{ base: "2xl", md: "3xl" }}
            onClose={scrollToTop}>
            <a href='/'>株式会社sample</a>
          </Heading>
        </Flex>
        <Flex
          align='Center'
          fontSize='md'
          display={{ base: "none", md: "flex" }}>
          <Box pr={10}>
            <NextLink href={"/"} passHref>
              <Link>商品一覧</Link>
            </NextLink>
          </Box>
          <Box pr={10}>
            <NextLink href={"/"} passHref>
              <Link>お知らせ</Link>
            </NextLink>
          </Box>
          <NextLink href={"/"} passHref>
            <Link>お問い合わせ</Link>
          </NextLink>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
});
