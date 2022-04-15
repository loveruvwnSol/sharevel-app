import React, { useEffect, useState } from "react";
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
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
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

import { Reply } from "./comments/reply";
import { PostSettings } from "./PostSettings";
import { PostList } from "./PostList";

import { nanoid } from "nanoid";

import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getStorage } from "firebase/storage";
import {
  child,
  get,
  ref as databaseRef,
  set,
  getDatabase,
  onValue,
} from "firebase/database";
import { db } from "../../../pages/_app";

export const AddPost = ({ image, text }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  const border = useColorModeValue("2px solid #E2E8F0", "2px solid white");
  const postBg = useColorModeValue("#EEEEEE", "#111");

  const [toggleIcon, setToggleIcon] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const ReplyOpen = () => {
    setIsOpen(!isOpen);
  };
  const [img, setImg] = useState();
  useEffect(() => {
    const storage = getStorage();
    getDownloadURL(storageRef(storage, "images/" + image)).then((url) =>
      setImg(url)
    );
  }, []);

  return (
    <Box fontFamily="inter" color={color} bg={bg}>
      <Box w="fix" h="fix" border={border} mt={14} mb={14}>
        <Box p={3}>
          <Box display="flex" justifyContent="left" alignItems="center">
            <Icon
              // border="1px solid #EEEEEE"
              // borderRadius="50%"
              as={BiUserCircle}
              mr={3}
              boxSize={10}
            />
            <Text fontWeight="Medium" fontSize="lg">
              user name
            </Text>
            <Box ml="auto">
              <Image
                boxSize={8}
                src={menuIcon.src}
                _hover={{
                  opacity: "0,5",
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
          bg={postBg}
        >
          <Image w="600px" h="auto" src={img} />
        </Box>
        <Divider />
        <Box>
          <Box ml={5} mt={2} display="flex" gap={6}>
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
            <Text fontWeight="Medium">{text}</Text>
            <Text fontWeight="Medium" color="#A9A9A9" fontSize="sm">
              now
            </Text>
          </Box>
        </Box>
      </Box>
      {isOpen && <Reply onToggleModal={() => ReplyOpen(false)} />}
    </Box>
  );
};
