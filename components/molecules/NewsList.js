import { memo } from "react";
import Date from "../../libs/date";
import { chakra, Badge, Link } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { LinkText } from "../atoms/LinkText";
export const NewsList = memo(({ news }) => {
  const count = 4;
  const tagColors = [
    { category: "press", color: "green.200" },
    { category: "important", color: "blue.200" },
    { category: "news", color: "red.200" },
  ];
  const list = [];
  const Dd = chakra("dd");
  for (let i = 0; i < count; i++) {
    const result = tagColors.map((tagColor) => {
      return tagColor.category === news[i].category.id && tagColor.color;
    });
    const color = result.filter(Boolean);

    list.push(
      <Link key={`/news/${news[i].id}`} href={`/news/${news[i].id}`}>
        <Flex
          as='dl'
          transition='.5s'
          _hover={{ cursor: "pointer", bgColor: "gray.100", transition: ".5s" }}
          flexDirection={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "80%" }}
          p={4}
          borderBottom='1px'
          borderColor='gray.200'>
          <Flex
            maxWidth={{ base: "200px", lg: "250px" }}
            as='dt'
            key={news[i].id}
            flexBasis='35%'
            textAlign='left'
            alignItems='center'
            justifyContent={{ base: "start", md: "start" }}
            fontSize={{ base: "s", lg: "xl" }}>
            <Date dateString={news[i].publishedAt} />
            <Badge
              as='span'
              flexShrink='3'
              size='lg'
              bg={color}
              mx={{ base: "1em", md: "3em" }}>
              {news[i].category.id}
            </Badge>
          </Flex>
          <Dd
            mt={{ base: 1, lg: 0 }}
            flexBasis='80%'
            textAlign='left'
            fontSize={{ base: "lg", lg: "2xl" }}
            fontWeight='bold'>
            {news[i].title}
          </Dd>
        </Flex>
      </Link>
    );
  }
  return (
    <>
      {list}
      <LinkText href='https://yahoo.co.jp' children='お知らせをもっと見る' />
    </>
  );
});
