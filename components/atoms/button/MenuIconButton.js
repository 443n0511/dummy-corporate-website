import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MenuIconButton = memo(({ onOpen }) => {
  return (
    <IconButton
      aria-label='メニューボタン'
      icon={<HamburgerIcon />}
      size='lg'
      variant='unstyled'
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
