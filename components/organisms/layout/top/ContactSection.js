import { memo } from "react";
import { SimpleGrid, Box, Heading, Grid } from "@chakra-ui/react";
import { ContactCard } from "../../molecules/ContactCard";
import { PhoneIcon } from "@chakra-ui/icons";
import { EmailIcon } from "@chakra-ui/icons";
import { ChatIcon } from "@chakra-ui/icons";
export const ContactSection = memo(() => {
  return (
    <Box as='section' bg='white' w='100%' pb='80px' align='center' mx='auto'>
      <Heading
        as='h2'
        fontWeight='bold'
        m={10}
        fontSize={{ base: "4xl", md: "6xl" }}>
        Contacts
      </Heading>
      <Grid
        w='100%'
        m='auto'
        templateRows={{ base: "repeat(3, 1fr)", xl: "repeat(1, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}
        gridAutoFlow={{ base: "row", xl: "column" }}
        gap={6}>
        <ContactCard
          iconimage={ChatIcon}
          img='https://picsum.photos/800/500?random=6'
          url='/'
          description='製品ごとによくある質問をまとめました。'
          productName='よくある質問'
        />
        <ContactCard
          iconimage={PhoneIcon}
          img='https://picsum.photos/800/500?random=6'
          url='/'
          description='月〜金 9:00〜12:00 / 13:00〜17:30'
          description2='（年末年始・祝日を除く）'
          productName='電話サポート'
        />
        <ContactCard
          iconimage={EmailIcon}
          img='https://picsum.photos/800/500?random=6'
          url='/'
          description='通常１〜２営業日以内に回答いたします'
          description2='ぜひお気軽にご相談ください'
          productName='メールでのご相談'
        />
      </Grid>
    </Box>
  );
});
