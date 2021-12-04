import { memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

export const ProductCard = memo(({ url, description, productName, img }) => {
  return (
    <Box
      as='a'
      href={url}
      transition='.2s'
      w='100%'
      h='100%'
      bg='white'
      shadow='md'
      top='0'
      p={4}
      m='auto'
      position='relative'
      role='group'
      _hover={{
        cursor: "pointer",
        opacity: 0.8,
        transition: ".2s",
        top: "-8px",
        shadow: "xl",
      }}>
      <Stack textAlign='center'>
        <Text fontSize='lg' fontWeight='bold' color='gray'>
          {description}
        </Text>
        <Image
          w='100%'
          h='100%'
          minHeight='200px'
          maxHeight='240px'
          objectFit='cover'
          src={img}
          alt={productName}
          m='auto'
          transition='.2s'
          border='solid 5px transparent;'
          _groupHover={{ border: "solid 5px gray" }}
        />
        <Text
          textDecoration='none'
          transition='.2s'
          display='inline-block'
          fontSize='lg'
          fontWeight='bold'
          borderBottom='solid 3px transparent'
          _groupHover={{
            textDecoration: "solid underline gray 2px",
          }}>
          {productName}
        </Text>
      </Stack>
    </Box>
  );
});
