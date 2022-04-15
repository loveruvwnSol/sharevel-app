import React, { useState, useRef, useCallback } from "react";
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
  color,
  AspectRatio,
} from "@chakra-ui/react";
import logo from "../../../../images/ShareVel.svg";
import italyTown from "../../../../images/italy_town.jpeg";
import commentIcon from "../../../../images/icons/comment.svg";
import linkIcon from "../../../../images/icons/link.svg";
import menuIcon from "../../../../images/icons/menu.svg";
import shavelIcon from "../../../../images/shareVelIcon.svg";
import americanIcon from "../../../../images/american.svg";
import officialMark from "../../../../images/icons/officialCheck.svg";
import filePlus from "../../../../images/icons/filePlus.svg";
import { FilePlusBlue } from "../../../../images/icons/createIcon";
import { BatuIcon } from "../../../../images/icons/createIcon";
import { HeartIcon } from "../../../../images/icons/createIcon";
import { RedHeartIcon } from "../../../../images/icons/createIcon";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { LinkIcon, SettingsIcon } from "@chakra-ui/icons";
import TopBar from "../../TopBar";
import editIcon from "../../../../images/icons/edit.svg";
import fileCheck from "../../../../images/icons/fileCheck.svg";

import { PostList } from "../PostList";

import { useDropzone } from "react-dropzone";
import { Post } from "../post";

export const Reply = (props) => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  const inputColor = useColorModeValue("#A9A9A9", "#666");
  const inputBg = useColorModeValue("#EEEEEE", "#666");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box
        zIndex={200}
        position="fixed"
        fontFamily="inter"
        color={color}
        bg={bg}
        border="2px solid #EEEEEE"
        borderRadius="2%"
        w="50%"
        h="70%"
        top="100"
        left="420"
      >
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="2xl" textAlign="center" mt={2} mb={2}>
              Send reply
            </Text>
            <IconButton
              left={44}
              onClick={props.onToggleModal}
              icon={<Icon as={BatuIcon} boxSize={7} />}
              _hover={{ opacity: "0.5" }}
              _focus={{ boxShadow: "none" }}
            />
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Box mt={32}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={4}
                  w="full"
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Image src={editIcon.src} />}
                    />
                    <Input
                      fontSize="xl"
                      variant="filled"
                      placeholder="input text"
                      color={inputColor}
                      bg={inputBg}
                    />
                  </InputGroup>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={10}
                >
                  <Button
                    bgColor="#00ADB5"
                    display="flex"
                    justifyContent="center"
                    fontSize="lg"
                    gap={3}
                  >
                    send reply
                    <Image src={fileCheck.src} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
