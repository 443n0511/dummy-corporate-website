import { memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { ReturnTopButton } from "../atoms/button/ScrollUp";

import Meta from "../atoms/Meta";
import { Box } from "@chakra-ui/react";

export const Layout = memo(({ children, title, image, description }) => {
  return (
    <>
      <Meta title={title} image={image} description={description} />
      <Box display='flex' flexDirection='column' minH='100vh'>
        <Header />
        <main>{children}</main>
        <ReturnTopButton />
      </Box>
      <Footer />
    </>
  );
});
