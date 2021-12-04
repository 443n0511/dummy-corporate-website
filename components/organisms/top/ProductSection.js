import { memo } from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import { ProductCard } from "../../molecules/ProductCard";
import { LinkButton } from "../../atoms/button/LinkButton";

export const ProductSection = memo(() => {
  return (
    <Box
      as='section'
      bg='gray.300'
      w='100%'
      p={4}
      align='center'
      pb={{ base: "40px", lg: "80px" }}
      mx='auto'>
      <Heading
        as='h2'
        fontWeight='bold'
        m={10}
        fontSize={{ base: "4xl", md: "6xl" }}>
        Products
      </Heading>
      <SimpleGrid
        w='90%'
        my={10}
        mx='auto'
        columns={{ base: 1, lg: 2, xl: 3 }}
        spacingX='40px'
        spacingY='20px'>
        <ProductCard
          img='https://picsum.photos/800/500?random=1'
          url='/'
          description='これは製品１の説明文です'
          productName='これは製品１の製品名です'
        />
        <ProductCard
          img='https://picsum.photos/800/500?random=2'
          url='/'
          description='これは製品２の説明文です'
          productName='これは製品２の製品名です'
        />
        <ProductCard
          img='https://picsum.photos/800/500?random=3'
          url='/'
          description='これは製品３の説明文です'
          productName='これは製品３の製品名です'
        />
        <ProductCard
          img='https://picsum.photos/800/500?random=4'
          url='/'
          description='これは製品４の説明文です'
          productName='これは製品４の製品名です'
        />
        <ProductCard
          img='https://picsum.photos/800/500?random=5'
          url='/'
          description='これは製品５の説明文です'
          productName='これは製品５の製品名です'
        />
        <ProductCard
          img='https://picsum.photos/800/500?random=6'
          url='/'
          description='これは製品６の説明文です'
          productName='これは製品６の製品名です'
        />
      </SimpleGrid>
      <LinkButton
        margin='0 auto'
        href='https://yahoo.co.jp'
        children='すべての製品をみる'
      />
    </Box>
  );
});
