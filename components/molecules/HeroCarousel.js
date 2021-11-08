import { Box } from "@chakra-ui/layout";
import { memo } from "react";
import Carousel from "react-grid-carousel";
import { Picture } from "../atoms/Picture";

export const HeroCarousel = memo(() => {
  const images = {
    base: "http://placehold.jp/600x400.png",
    md: "http://placehold.jp/900x400.png",
    lg: "http://placehold.jp/1200x400.png",
  };

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "block",
        margin: ".5em",
        padding: ".5em",
        height: "1.5em",
        width: "1.5em",
        background: isActive ? "#232323" : "#999",
        borderRadius: "50%",
      }}></span>
  );
  return (
    <>
      <Box mt={100}>
        <Carousel
          autoplay={3000}
          loop
          cols={1}
          rows={1}
          gap={11}
          showDots={true}
          dot={MyDot}
          responsiveLayout={[
            {
              breakpoint: 990,
              cols: 1,
            },
          ]}
          mobileBreakpoint={670}>
          <Carousel.Item>
            <Picture base={images.base} md={images.md} lg={images.lg} />
          </Carousel.Item>
          <Carousel.Item>
            <Picture base={images.base} md={images.md} lg={images.lg} />
          </Carousel.Item>
          <Carousel.Item>
            <Picture base={images.base} md={images.md} lg={images.lg} />
          </Carousel.Item>
        </Carousel>
      </Box>
    </>
  );
});
