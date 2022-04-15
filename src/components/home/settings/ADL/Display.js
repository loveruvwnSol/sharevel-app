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
  LightMode,
  DarkMode,
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

import { VscCircleLargeOutline } from "react-icons/vsc";
import { VscCircleLargeFilled } from "react-icons/vsc";

import { useDropzone } from "react-dropzone";

export const Display = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");

  const [toggleIcon, setToggleIcon] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box
        zIndex={300}
        position="fixed"
        fontFamily="inter"
        color={color}
        background={bg}
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
              Display
            </Text>
            <IconButton
              background={bg}
              color={color}
              left={44}
              onClick={props.onToggleModal}
              icon={<Icon as={BatuIcon} boxSize={7} />}
              _hover={{ opacity: "0.5" }}
              _focus={{ boxShadow: "none" }}
            />
          </Box>
          <Divider />
        </Box>
        <Box p={14}>
          <Text fontSize="2xl" mb={2}>
            ・Color
          </Text>
          <Box display="flex" gap={2}>
            <Button
              leftIcon={<VscCircleLargeOutline color="white" />}
              p={7}
              variant="outline"
              color="white"
              bg="#00ADB5"
              _hover={{ opacity: "0.5" }}
            >
              SkyBlue
            </Button>
            <Button
              leftIcon={<VscCircleLargeOutline color="white" />}
              p={7}
              variant="outline"
              bg="#FFD400"
              color="white"
              _hover={{ opacity: "0.5" }}
            >
              Yellow
            </Button>
            <Button
              leftIcon={<VscCircleLargeOutline color="white" />}
              p={7}
              variant="outline"
              bg="#F91880"
              color="white"
              _hover={{ opacity: "0.5" }}
            >
              Pink
            </Button>
            <Button
              leftIcon={<VscCircleLargeOutline color="white" />}
              p={7}
              variant="outline"
              bg="#00BA7C"
              color="white"
              _hover={{ opacity: "0.5" }}
            >
              Green
            </Button>
          </Box>
        </Box>
        <Box p={14}>
          <Text fontSize="2xl" mb={2}>
            ・Background Mode
          </Text>
          <Box display="flex" gap={6}>
            <Button
              leftIcon={<VscCircleLargeOutline />}
              p={7}
              variant="outline"
              color={bg}
              bg={color}
              onClick={toggleColorMode}
              _hover={{ opacity: "0.5" }}
            >
              {colorMode === "light" ? "Dark" : "Light"} Mode
            </Button>
            {/* <DarkMode>
              <Button
                leftIcon={<VscCircleLargeFilled color="#333" />}
                p={7}
                variant="outline"
                bg="black"
                color="white"
                _hover={{ background: "#555" }}
                onClick={toggleColorMode}
              >
                Dark Mode
              </Button>
            </DarkMode> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
