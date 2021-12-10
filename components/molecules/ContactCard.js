import { memo } from "react";
import {
  Box,
  Center,
  Image,
  Icon,
  Text,
  Flex,
  Container,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const ContactCard = memo(
  ({ url, productName, description, description2, iconimage }) => {
    return (
      <Flex
        p={4}
        as='a'
        top='0'
        align='center'
        transition='.2s'
        position='relative'
        _hover={{
          bgColor: "gray.50",
          cursor: "pointer",
          transition: ".2s",
          top: "-8px",
          shadow: "md",
        }}>
        <Center
          w={{ base: "70px", lg: "110px" }}
          h={{ base: "70px", lg: "110px" }}
          href={url}
          borderRadius='50%'
          transition='.2s'
          bg='gray.100'
          shadow='md'
          top='0'
          mx={{ base: "0 auto", md: "auto" }}
          position='relative'
          role='group'
          _groupHover={{
            opacity: 0.8,
            transition: ".2s",
            top: "-8px",
            shadow: "xl",
          }}>
          <Icon as={iconimage} w='50%' h='50%' color='gray.600' />
        </Center>
        <Box
          ml='20px'
          textAlign='left'
          flex='1'
          _groupHover={{
            opacity: 0.8,
            transition: ".2s",
            top: "-8px",
            shadow: "xl",
          }}>
          <Text fontSize='lg' fontWeight='bold'>
            {productName}
          </Text>
          <Text
            color='gray'
            textDecoration='none'
            transition='.2s'
            display='inline-block'
            fontSize={{ base: "sm", lg: "md" }}
            fontWeight='bold'
            borderBottom='solid 3px transparent'
            _groupHover={{
              textDecoration: "solid underline gray 2px",
            }}>
            {description}
            <br />
            {description2}
          </Text>
        </Box>
      </Flex>
    );
  }
);
