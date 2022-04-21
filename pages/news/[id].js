import { client } from "../../api/client";
import Date from "../../libs/date";
import { Layout } from "../../components/templates/Layout";
import { LinkButton } from "../../components/atoms/button/LinkButton";
import { Text, Box, Heading } from "@chakra-ui/react";

export default function NewsId({ news }) {
  return (
    <Layout
      title={news.title}
      image={news.image}
      description={news.description}>
      <Box m='auto' py={10} w='70%' my={100} fontSize='2em'>
        <Heading
          borderBottom='.08em'
          borderStyle='dashed'
          borderColor='gray.900'
          as='h1'
          py={4}
          my={10}
          fontWeight='bold'
          fontSize='4xl'>
          {news.title}
        </Heading>
        <Text fontSize='xl'>
          <Date dateString={news.publishedAt} />
        </Text>
        <Box
          py={10}
          lineHeight={2}
          fontSize='xl'
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
        />
        <LinkButton
          my={10}
          mx='auto'
          href='/news/'
          children='ニュース一覧をみる'
        />
      </Box>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};
