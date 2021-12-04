import { memo } from "react";
import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    top <= scroll ? setIsButtonActive(true) : setIsButtonActive(false);
  };

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
  };
  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <IconButton
      outline='none'
      _focus={{ outline: "none" }}
      position='fixed'
      zIndex='100'
      bottom={{ base: 10, md: 20 }}
      right={{ base: 10, md: 20 }}
      style={style}
      borderRadius='full'
      boxSize={20}
      bgColor='gray.600'
      color='White'
      _hover={{ bgColor: "gray.200", color: "gray.600" }}
      icon={<ChevronUpIcon w={10} h={10} />}
      onClick={returnTop}>
      ボタン
    </IconButton>
  );
};

export default ReturnTopButton;
