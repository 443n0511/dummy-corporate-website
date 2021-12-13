import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  styles: {
    global: {
      fontFamily:
        '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic",Meiryo, sans-serif',
      body: {
        backgroundColor: "white",
        color: "gray.900",
      },
    },
  },
});
