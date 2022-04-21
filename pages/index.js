import { client } from "../api/client";
import { Layout } from "../components/templates/Layout";
import { NewsSection } from "../components/organisms/layout/top/NewsSection";
import { ProductSection } from "../components/organisms/layout/top/ProductSection";
import { HeroCarousel } from "../components/molecules/HeroCarousel";
import { ContactSection } from "../components/organisms/layout/top/ContactSection";

export default function Home({ news }) {
  return (
    <Layout
      title='株式会社Sample'
      description='株式会社Sampleの公式webページです'>
      <HeroCarousel />
      <NewsSection news={news} />
      <ProductSection />
      <ContactSection />
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "news",
    queries: {
      limit: 5,
      offset: 0,
    },
  });
  return {
    props: {
      news: data.contents,
    },
  };
};
