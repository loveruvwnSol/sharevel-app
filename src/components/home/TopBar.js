import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  Link,
  Grid,
  Divider,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "../../images/ShareVel.svg";
import userIcon from "../../images/icons/user_icon.svg";
import postButton from "../../images/icons/postButton.svg";
import batuIcon from "../../images/icons/batu.svg";
import { PostSettings } from "./post/PostSettings";
import { Post } from "./post/PostList";
import { SideNavi } from "./SideNavi";
import { FilePlusBlue } from "../../images/icons/createIcon";
import { BatuIcon } from "../../images/icons/createIcon";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(true);

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const inputBg = useColorModeValue("#EEEEEE", "#666");
  const color = useColorModeValue("#393E46", "white");
  const inputColor = useColorModeValue("#A9A9A9", "#666");

  const IsOpenToggleIcon = () => {
    setIsOpen(!isOpen);
    setToggleIcon(!toggleIcon);
  };
  return (
    <Box
      fontFamily="inter"
      pos="sticky"
      top="0"
      pt="1px"
      background="#ffffff"
      zIndex={100}
      color={color}
      bg={bg}
    >
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Link href="/home/Home">
          <Image src={logo.src} w={56} />
        </Link>
        <InputGroup w={96} ml={60}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color={color} />}
          />
          <Input
            fontSize="xl"
            variant="filled"
            placeholder="Search"
            color={color}
            bg={inputBg}
          />
        </InputGroup>
        <Text ml={14} color="#00ADB5" textDecoration="2px underline">
          Lv.1
        </Text>
        <Box ml={4} mt={2}>
          <Icon as={BiUserCircle} boxSize={10} />
        </Box>
        <IconButton
          background="none"
          ml={10}
          onClick={IsOpenToggleIcon}
          icon={
            toggleIcon ? <FilePlusBlue boxSize={8} /> : <BatuIcon boxSize={8} />
          }
          _hover={{ opacity: "0.5" }}
          _focus={{ boxShadow: "none" }}
        />
      </Box>
      <Divider mt={6} />
      {isOpen && <PostSettings onToggleModal={() => IsOpenToggleIcon(false)} />}
    </Box>
  );
};
