import Head from "next/head";
export default function Meta({ title, description, image }) {
  return (
    <Head>
      <title>{title ? title : "株式会社Sample"}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title ? title : "株式会社Sample"} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content={image ? image : "http://placehold.jp/600x400.png"}
      />
    </Head>
  );
}
