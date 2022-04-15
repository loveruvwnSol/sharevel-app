import React from "react";
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
import { AiOutlineMessage } from "@react-icons/all-files/ai/AiOutlineMessage";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineEllipsis } from "@react-icons/all-files/ai/AiOutlineEllipsis";
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
import { useState } from "react";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const MessagesList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  return (
    <Box
      fontFamily="inter"
      color={color}
      bg={bg}
      display="flex"
      position="sticky"
      top="90"
    >
      <Box>
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" alignItems="flex-start" pr={5} pt={6} pb={6}>
              <Icon as={AiOutlineMessage} boxSize={12} ml={2} mr={3} />
              <Text fontWeight="Medium" fontSize="3xl" textAlign="left">
                Messages
              </Text>
            </Box>
            <Box mt={1}>
              <Icon
                as={AiOutlinePlusCircle}
                boxSize={7}
                ml={14}
                _hover={{ opacity: "0.5" }}
              />
            </Box>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box pr={5} pt={4} pb={4} transition="0.2s">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="left"
                alignItems="center"
                _hover={{ opacity: "0.5" }}
              >
                <Image
                  border="1px solid #EEEEEE"
                  borderRadius="50%"
                  src={shavelIcon.src}
                  ml={2}
                  mr={3}
                />
                <Text
                  fontWeight="Medium"
                  fontSize="xl"
                  textAlign="left"
                  whiteSpace="nowrap"
                >
                  ShareVel_official
                </Text>
              </Box>
              <Box>
                <Icon
                  as={AiOutlineEllipsis}
                  boxSize={7}
                  w={10}
                  ml={14}
                  _hover={{ opacity: "0.5" }}
                />
              </Box>
            </Box>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box pr={5} pt={4} pb={4} transition="0.2s">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="left"
                alignItems="center"
                _hover={{ opacity: "0.5" }}
              >
                <Image
                  border="1px solid #EEEEEE"
                  borderRadius="50%"
                  src={americanIcon.src}
                  ml={2}
                  mr={3}
                />
                <Text
                  fontWeight="Medium"
                  fontSize="xl"
                  textAlign="left"
                  whiteSpace="nowrap"
                >
                  James Anderson
                </Text>
              </Box>
              <Box>
                <Icon
                  as={AiOutlineEllipsis}
                  boxSize={7}
                  w={10}
                  ml={14}
                  _hover={{ opacity: "0.5" }}
                />
              </Box>
            </Box>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box pr={5} pt={4} pb={4} transition="0.2s">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="left"
                alignItems="center"
                _hover={{ opacity: "0.5" }}
              >
                <Image
                  border="1px solid #EEEEEE"
                  borderRadius="50%"
                  src={userIcon.src}
                  ml={2}
                  mr={3}
                />
                <Text
                  fontWeight="Medium"
                  fontSize="xl"
                  textAlign="left"
                  whiteSpace="nowrap"
                >
                  user name
                </Text>
              </Box>
              <Box>
                <Icon
                  as={AiOutlineEllipsis}
                  boxSize={7}
                  w={10}
                  ml={14}
                  _hover={{ opacity: "0.5" }}
                />
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
          position="fixed"
          zIndex={100}
        />
      </Box>
    </Box>
  );
};
