import React, { useState } from "react";
import {
  Box,
  Text,
  Icon,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  Link,
  Grid,
  Divider,
  background,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import logo from "../../../images/ShareVel.svg";
import italyTown from "../../../images/italy_town.jpeg";
import userIcon from "../../../images/icons/user_icon.svg";
import commentIcon from "../../../images/icons/comment.svg";
import linkIcon from "../../../images/icons/link.svg";
import menuIcon from "../../../images/icons/menu.svg";
import shavelIcon from "../../../images/shareVelIcon.svg";
import americanIcon from "../../../images/american.svg";
import officialMark from "../../../images/icons/officialCheck.svg";
import {
  HeartIcon,
  ReplyIcon,
  LinkIcon,
} from "../../../images/icons/createIcon";
import { RedHeartIcon } from "../../../images/icons/createIcon";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

import { Post } from "./post";
import { AddPost } from "./addPost";
import { Reply } from "./comments/reply";
import { PostSettings } from "./PostSettings";

export const PostList = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");

  const [toggleIcon, setToggleIcon] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const ReplyOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box ml={20} fontFamily="inter" bg={bg} color={color} w="800px" h="fix">
      <Box border="2px solid #E2E8F0" mt={14} mb={14} zIndex={1}>
        <Box p={3}>
          <Box display="flex" justifyContent="left" alignItems="center">
            <Image
              border="1px solid #EEEEEE"
              borderRadius="50%"
              src={shavelIcon.src}
              mr={3}
            />
            <Text fontWeight="Medium" fontSize="lg" mr={3}>
              ShareVel_official
            </Text>
            <Image w={5} src={officialMark.src} />
            <Box ml="auto">
              <Image
                boxSize={8}
                src={menuIcon.src}
                _hover={{
                  opacity: "0.5",
                  borderRadius: "50px",
                  transition: "0.2s",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#fff"
        >
          <Box mt={40} mb={40} display="flex">
            <Text mr={3} color="#393E46" fontSize="4xl">
              Welcome to
            </Text>
            <Image w={60} src={logo.src} />
            <Text ml={3} fontSize="4xl">
              !
            </Text>
          </Box>
        </Box>
        <Divider />
        <Box>
          <Box ml={5} mt={1} display="flex" gap={6}>
            <IconButton
              onClick={() => setToggleIcon(!toggleIcon)}
              icon={
                toggleIcon ? (
                  <HeartIcon boxSize={8} />
                ) : (
                  <RedHeartIcon boxSize="8" />
                )
              }
              _hover={{ opacity: "0.5" }}
              _focus={{ boxShadow: "none" }}
            />
            <IconButton
              onClick={ReplyOpen}
              icon={<ReplyIcon boxSize={8} />}
              _hover={{ opacity: "0.5" }}
              _focus={{ boxShadow: "none" }}
            />
            <IconButton
              icon={<LinkIcon boxSize={8} />}
              _hover={{ opacity: "0.5" }}
              _focus={{ boxShadow: "none" }}
            />
          </Box>
          <Box ml={5} mt={2} mb={10}>
            <Text fontWeight="Medium">
              Welcome to ShareVel !{"  "}
              <Link href="https://loveruvwnsol.github.io/ShareVel/">
                <Text as="span" color="#00ADB5" textDecoration="underline">
                  Click here for how to use
                </Text>
              </Link>
            </Text>
            <Text fontWeight="Medium" color="#A9A9A9" fontSize="sm">
              2022/1/14
            </Text>
          </Box>
        </Box>
      </Box>
      <Post />
      {isOpen && <Reply onToggleModal={() => ReplyOpen(false)} />}
      {data &&
        Object.entries(data).map(([key, val]) => (
          <AddPost key={key} image={val.image} text={val.text} />
        ))}
    </Box>
  );
};
