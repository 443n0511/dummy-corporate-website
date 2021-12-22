import { memo } from "react";
import Date from "../../libs/date";
import { Box, Badge, Grid, GridItem } from "@chakra-ui/layout";
import NextLink from "next/link";

export const NewsList = memo(({ news, margin, items }) => {
  const tagColors = [
    { category: "press", color: "green.200" },
    { category: "important", color: "blue.200" },
    { category: "news", color: "red.200" },
  ];
  const list = [];
  for (let i = 0; i < items; i++) {
    const result = tagColors.map(
      (tagColor) => tagColor.category === news[i].category.id && tagColor.color
    );
    const color = result.filter(Boolean);

    list.push(
      <NextLink key={news[i].id} href={`/news/${news[i].id}`} passHref>
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
            base: "100px 120px auto",
            lg: " 100px 140px auto",
          }}
          templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
          gap={0}
          borderBottom='1px'
          borderColor='gray.200'>
          <GridItem
            display='grid'
            alignItems='center'
            as='dt'
            gridArea=' 1 / 1 / 2 / 2'>
            <Date dateString={news[i].publishedAt} />
          </GridItem>
          <GridItem
            display='grid'
            alignItems='center'
            gridArea=' 1 / 2 / 2 / 3'>
            <Badge as='span' bg={color} fontSize={{ base: "s", lg: "xl" }}>
              {news[i].category.id}
            </Badge>
          </GridItem>

          <GridItem
            as='dd'
            p={{ base: 2, lg: 5 }}
            display='grid'
            alignItems='center'
            gridArea={{ base: "2 / 1 / 3 / 6", lg: " 1 / 3 / 2 / 6" }}
            fontWeight='bold'
            textAlign='left'
            fontSize={{ base: "lg", lg: "2xl" }}>
            {news[i].title}
          </GridItem>
        </Grid>
      </NextLink>
    );
  }
  return <Box my={margin}>{list}</Box>;
});
