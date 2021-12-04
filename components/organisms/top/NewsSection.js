import { memo } from "react";
import { LinkButton } from "../../atoms/button/LinkButton";
import { NewsList } from "../../molecules/NewsList";
import { Heading, Box } from "@chakra-ui/layout";

export const NewsSection = memo(({ news }) => {
  return (
    <Box
      as='section'
      bg='white'
      w='90%'
      p={4}
      align='center'
      py={{ base: "40px", lg: "80px" }}
      mx='auto'>
      <Heading
        as='h2'
        fontWeight='bold'
        m={10}
        fontSize={{ base: "4xl", md: "6xl" }}>
        News Release
      </Heading>
      <NewsList news={news} margin={10} />
      <LinkButton
        my={10}
        mx='auto'
        href='https://yahoo.co.jp'
        children='ニュース一覧をみる'
      />
    </Box>
  );
});
