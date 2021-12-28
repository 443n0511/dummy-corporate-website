import { memo } from "react";
import Date from "../../libs/date";
import { Box, Badge, Grid, GridItem } from "@chakra-ui/layout";
import NextLink from "next/link";

export const NewsList = memo(({ news, margin }) => {
  const tagColors = [
    { category: "press", color: "green.200" },
    { category: "important", color: "blue.200" },
    { category: "news", color: "red.200" },
  ];
  const list = [];
  news.forEach((article) => {
    const result = tagColors.map(
      (tagColor) => tagColor.category === article.category.id && tagColor.color
    );
    const color = result.filter(Boolean);

    list.push(
      <NextLink key={article.id} href={`/news/${article.id}`} passHref>
        <Grid
          as='dl'
          m='auto'
          transition='.5s'
          _hover={{
            cursor: "pointer",
            bgColor: "gray.100",
            transition: ".5s",
          }}
          w={{ base: "100%", md: "80%" }}
          templateColumns={{
            base: "100px 100px auto",
            lg: " 100px 120px auto",
          }}
          templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
          gap={0}
          borderBottom='1px'
          borderColor='gray.200'>
          <GridItem alignSelf='center' as='dt' gridArea=' 1 / 1 / 2 / 2'>
            <Date dateString={article.publishedAt} />
          </GridItem>
          <GridItem
            alignSelf='center'
            justifySelf={{ base: "start", lg: "center" }}
            gridArea=' 1 / 2 / 2 / 3'>
            <Badge as='span' bg={color} fontSize={{ base: "s", lg: "md" }}>
              {article.category.id}
            </Badge>
          </GridItem>

          <GridItem
            as='dd'
            p={{ base: 1, lg: 5 }}
            alignSelf='center'
            gridArea={{ base: "2 / 1 / 3 / 6", lg: " 1 / 3 / 2 / 6" }}
            fontWeight='bold'
            textAlign='left'
            fontSize={{ base: "lg", lg: "2xl" }}>
            {article.title}
          </GridItem>
        </Grid>
      </NextLink>
    );
  });

  return <Box my={margin}>{list}</Box>;
});
