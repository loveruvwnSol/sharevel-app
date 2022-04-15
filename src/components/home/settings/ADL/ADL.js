import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { EditIcon, AddIcon } from "@chakra-ui/icons";
import logo from "../../../../images/ShareVel.svg";
import userIcon from "../../../../images/icons/user_icon.svg";
import notificationIcon from "../../../../images/icons/notification.svg";
import italyTown from "../../../../images/italy_town.jpeg";
import LikeIcon from "../../../../images/icons/heart.svg";
import redLikeIcon from "../../../../images/icons/redHeart.svg";
import commentIcon from "../../../../images/icons/comment.svg";
import linkIcon from "../../../../images/icons/link.svg";
import menuIcon from "../../../../images/icons/menu.svg";
import mailIcon from "../../../../images/icons/mail.svg";
import plusMailIcon from "../../../../images/icons/plusMail.svg";
import shavelIcon from "../../../../images/shareVelIcon.svg";
import americanIcon from "../../../../images/american.svg";
import officialMark from "../../../../images/icons/officialCheck.svg";
import { RightArrow } from "../../../../images/icons/createIcon";

import { SettingsList } from "../SettingsList";
import { Display } from "./Display";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const ADL = (props) => {
  const [isOpenDisplay, setIsOpenDisplay] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");

  const IsOpenDisplay = () => {
    setIsOpenDisplay(!isOpenDisplay);
  };

  return (
    <Box>
      <Box
        fontFamily="inter"
        color={color}
        bg={bg}
        display="flex"
        // position="sticky"
        top="90"
      >
        <Box>
          <Box>
            <Box display="flex" justifyContent="left" alignItems="center">
              <Box
                display="flex"
                alignItems="flex-start"
                pr={5}
                pt={6}
                pb={6}
                ml={3}
              >
                <Text
                  fontWeight="Medium"
                  fontSize="3xl"
                  textAlign="left"
                  whiteSpace="nowrap"
                >
                  Accessibility, display and languages
                </Text>
              </Box>
            </Box>
            <Divider />
          </Box>
          <Box>
            <Box
              pr={5}
              pt={4}
              pb={4}
              transition="0.2s"
              _hover={{ opacity: "0.5" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  ml={3}
                >
                  <Text
                    fontWeight="Medium"
                    fontSize="xl"
                    textAlign="left"
                    whiteSpace="nowrap"
                  >
                    Accessibility
                  </Text>
                </Box>
                <Box>
                  <Icon as={RightArrow} boxSize={7} w={10} ml={14} />
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
          <Box>
            <Box
              pr={5}
              pt={4}
              pb={4}
              transition="0.2s"
              _hover={{ opacity: "0.5" }}
              onClick={IsOpenDisplay}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  ml={3}
                >
                  <Text
                    fontWeight="Medium"
                    fontSize="xl"
                    textAlign="left"
                    whiteSpace="nowrap"
                  >
                    Display
                  </Text>
                </Box>
                <Box>
                  <Icon as={RightArrow} boxSize={7} w={10} ml={14} />
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
          <Box>
            <Box
              pr={5}
              pt={4}
              pb={4}
              transition="0.2s"
              _hover={{ opacity: "0.5" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  ml={3}
                >
                  <Text
                    fontWeight="Medium"
                    fontSize="xl"
                    textAlign="left"
                    whiteSpace="nowrap"
                  >
                    Languages
                  </Text>
                </Box>
                <Box>
                  <Icon as={RightArrow} boxSize={7} w={10} ml={14} />
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
          {isOpenDisplay && (
            <Display
              onToggleModal={() => {
                IsOpenDisplay(false);
              }}
            />
          )}
        </Box>
        <Divider h="720px" orientation="vertical" />
      </Box>
    </Box>
  );
};
