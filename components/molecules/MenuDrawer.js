import { memo } from "react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
} from "@chakra-ui/react";

export const MenuDrawer = memo(({ onClose, isOpen }) => {
  return (
    <Drawer placement='right' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100' onClick={onClose}>
            <Button w='100%'>TOP</Button>
            <Button w='100%'>商品一覧</Button>
            <Button w='100%'>お知らせ</Button>
            <Button w='100%'>お問い合わせ</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
