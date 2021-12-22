import { client } from "../../api/client";
import { Layout } from "../../components/templates/Layout";
import { Heading, Box } from "@chakra-ui/layout";
import { NewsList } from "../../components/molecules/NewsList";
import { LinkButton } from "../../components/atoms/button/LinkButton";
export default function newsHome({ news }) {
  return (
    <Layout
      title='株式会社Sample'
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
      </Box>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};
