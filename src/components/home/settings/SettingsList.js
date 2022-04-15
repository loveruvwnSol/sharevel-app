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
import { AiOutlineSetting } from "@react-icons/all-files/ai/AiOutlineSetting";
import logo from "../../../images/ShareVel.svg";
import userIcon from "../../../images/icons/user_icon.svg";
import notificationIcon from "../../../images/icons/notification.svg";
import italyTown from "../../../images/italy_town.jpeg";
import LikeIcon from "../../../images/icons/heart.svg";
import redLikeIcon from "../../../images/icons/redHeart.svg";
import commentIcon from "../../../images/icons/comment.svg";
import linkIcon from "../../../images/icons/link.svg";
import menuIcon from "../../../images/icons/menu.svg";
import mailIcon from "../../../images/icons/mail.svg";
import plusMailIcon from "../../../images/icons/plusMail.svg";
import shavelIcon from "../../../images/shareVelIcon.svg";
import americanIcon from "../../../images/american.svg";
import officialMark from "../../../images/icons/officialCheck.svg";
import settingsIcon from "../../../images/icons/settings.svg";
import { RightArrow } from "../../../images/icons/createIcon";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

import { Acount } from "./acount/Acount";
import { Security } from "./security/Security";
import { Privacy } from "./privacy/Privacy";
import { Notifications } from "./notifications/Notifications";
import { ADL } from "./ADL/ADL";
import { Display } from "./ADL/Display";

export const SettingsList = () => {
  const [isOpenAcout, setIsOpenAcout] = useState(false);
  const [isOpenSecurity, setIsOpenSecurity] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [isOpenADL, setIsOpenADL] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");

  const IsOpenAcout = () => {
    setIsOpenAcout(true);
    setIsOpenSecurity(false);
    setIsOpenPrivacy(false);
    setIsOpenNotifications(false);
    setIsOpenADL(false);
  };

  const IsOpenSecurity = () => {
    setIsOpenSecurity(true);
    setIsOpenAcout(false);
    setIsOpenPrivacy(false);
    setIsOpenNotifications(false);
    setIsOpenADL(false);
  };

  const IsOpenPrivacy = () => {
    setIsOpenPrivacy(true);
    setIsOpenAcout(false);
    setIsOpenSecurity(false);
    setIsOpenNotifications(false);
    setIsOpenADL(false);
  };

  const IsOpenNotifications = () => {
    setIsOpenNotifications(true);
    setIsOpenAcout(false);
    setIsOpenSecurity(false);
    setIsOpenPrivacy(false);
    setIsOpenADL(false);
  };

  const IsOpenADL = () => {
    setIsOpenADL(true);
    setIsOpenAcout(false);
    setIsOpenSecurity(false);
    setIsOpenPrivacy(false);
    setIsOpenNotifications(false);
  };

  return (
    <Box
      fontFamily="inter"
      color={color}
      bg={bg}
      display="flex"
      // position="sticky"
      top="90"
      w="100%"
    >
      <Box>
        <Box>
          <Box display="flex" justifyContent="left" alignItems="center" mr={36}>
            <Box display="flex" alignItems="flex-start" pr={5} pt={6} pb={6}>
              <Icon as={AiOutlineSetting} ml={2} mr={3} boxSize={10} />
              <Text fontWeight="Medium" fontSize="3xl" textAlign="left">
                Settings
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
            onClick={IsOpenAcout}
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
                  Your Acount
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
            onClick={IsOpenSecurity}
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
                  Security
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
            onClick={IsOpenPrivacy}
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
                  Privacy
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
            onClick={IsOpenNotifications}
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
                  Notifications
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
            onClick={IsOpenADL}
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
                  Accessibility etc...
                </Text>
              </Box>
              <Box>
                <Icon as={RightArrow} boxSize={7} w={10} ml={14} />
              </Box>
            </Box>
          </Box>
          <Divider />
        </Box>
      </Box>
      <Box>
        <Divider
          h="720px"
          orientation="vertical"
          //  position="sticky"
        />
      </Box>
      {isOpenAcout && <Acount />}
      {isOpenSecurity && <Security />}
      {isOpenPrivacy && <Privacy />}
      {isOpenNotifications && <Notifications />}
      {isOpenADL && <ADL />}
    </Box>
  );
};
