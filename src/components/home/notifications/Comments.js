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
import { AiOutlineBell } from "@react-icons/all-files/ai/AiOutlineBell";
import logo from "../../../images/ShareVel.svg";
import notificationIcon from "../../../images/icons/notification.svg";
import italyTown from "../../../images/italy_town.jpeg";
import LikeIcon from "../../../images/icons/heart.svg";
import redLikeIcon from "../../../images/icons/redHeart.svg";
import commentIcon from "../../../images/icons/comment.svg";
import linkIcon from "../../../images/icons/link.svg";
import menuIcon from "../../../images/icons/menu.svg";
import shavelIcon from "../../../images/shareVelIcon.svg";
import americanIcon from "../../../images/american.svg";
import officialMark from "../../../images/icons/officialCheck.svg";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const Comments = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  return (
    <Box ml={20} fontFamily="inter" color={color} bg={bg}>
      <Box w="800px" h="fix" border="2px solid #E2E8F0" mt={14} mb={14}>
        <Box p={3}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" justifyContent="left">
              <Icon as={AiOutlineBell} boxSize={12} mr={3} />
              <Text fontWeight="Medium" fontSize="3xl" mr={3}>
                Notifications
              </Text>
            </Box>
            <Box display="flex" fontSize="2xl" gap={10}>
              <Link
                href="/home/notifications/Like"
                _hover={{ textDecoration: "none" }}
              >
                <Text
                  _hover={{
                    textDecoration: "underline 2px",
                    textDecorationColor: "#00ADB5",
                  }}
                >
                  LIKE
                </Text>
              </Link>
              <Link
                href="/home/notifications/Comments"
                _hover={{ textDecoration: "none" }}
              >
                <Text
                  textDecoration="underline 2px"
                  textDecorationColor="#00ADB5"
                  _hover={{
                    textDecoration: "underline 2px",
                    textDecorationColor: "#00ADB5",
                  }}
                >
                  COMMENTS
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box ml={3} pt={4} pb={4}>
          <Box display="flex" justifyContent="left" alignItems="center">
            <Image src={americanIcon.src} mr={3} />
            <Text fontSize="xl">James Anderson</Text>
            {/* <Text display="unset" fontSize="sm" color="#00ADB5">
              @ your_name
            </Text> */}
          </Box>
          <Text ml={10} color="#A9A9A9">
            the text of your post here
          </Text>
        </Box>
        <Divider mb={3} />
      </Box>
    </Box>
  );
};
