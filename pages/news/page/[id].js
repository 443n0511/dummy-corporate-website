import { client } from "../../../api/client";
import { Layout } from "../../../components/templates/Layout";
import { Heading, Box } from "@chakra-ui/layout";
import { NewsList } from "../../../components/molecules/NewsList";
import { Pagination } from "../../../components/molecules/Pagination";

const PER_PAGE = 5;
export default function NewsPageId({ news, totalCount }) {
  console.log(news);
  return (
    <Layout
      title='お知らせ一覧 | 株式会社Sample'
      description='株式会社Sampleのお知らせ一覧ページ'>
      <Box
        as='section'
        bg='white'
        w='90%'
        p={5}
        align='center'
        py={{ base: "40px", lg: "80px" }}
        mx='auto'>
        <Heading
          as='h2'
          fontWeight='bold'
          m={10}
          fontSize={{ base: "4xl", md: "6xl" }}>
          News Archive
        </Heading>
        <NewsList items={6} news={news} margin={10} />
        <Pagination totalCount={totalCount} />
      </Box>
    </Layout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (number) => `/news/page/${number}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "news",
    queries: {
      limit: 5,
      offset: (id - 1) * 5,
    },
  });
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
