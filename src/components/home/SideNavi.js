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
} from "@chakra-ui/react";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineBell } from "@react-icons/all-files/ai/AiOutlineBell";
import { AiOutlineMessage } from "@react-icons/all-files/ai/AiOutlineMessage";
import { AiOutlineSetting } from "@react-icons/all-files/ai/AiOutlineSetting";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";

import homeIcon from "../../images/icons/home.svg";
import notificationIcon from "../../images/icons/notification.svg";
import mailIcon from "../../images/icons/mail.svg";
import settingsIcon from "../../images/icons/settings.svg";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const SideNavi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  return (
    <Box
      fontFamily="inter"
      ml={24}
      display="flex"
      position="sticky"
      top="85"
      color={color}
      bg={bg}
    >
      <Box>
        <Link href="/home/Home" _hover={{ textDecoration: "none" }}>
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={20}
            p={2}
            transition="0.2s"
            _hover={{ opacity: "0.5" }}
          >
            <Icon as={AiOutlineHome} mr={4} boxSize={10} />
            <Text fontSize="3xl">Home</Text>
          </Box>
        </Link>
        <Link
          href="/home/notifications/Like"
          _hover={{ textDecoration: "none" }}
        >
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={5}
            p={2}
            transition="0.2s"
            _hover={{ opacity: "0.5" }}
          >
            <Icon as={AiOutlineBell} mr={4} boxSize={10} />
            <Text fontSize="3xl">Notifications</Text>
          </Box>
        </Link>
        <Link
          href="/home/messages/Messages"
          _hover={{ textDecoration: "none" }}
        >
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={5}
            p={2}
            transition="0.2s"
            _hover={{ opacity: "0.5" }}
          >
            <Icon as={AiOutlineMessage} mr={4} boxSize={10} />
            <Text fontSize="3xl">Messages</Text>
          </Box>
        </Link>
        <Link
          href="/home/profile/YourProfile"
          _hover={{ textDecoration: "none" }}
        >
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={5}
            p={2}
            transition="0.2s"
            _hover={{ opacity: "0.5" }}
          >
            <Icon as={BiUserCircle} mr={4} boxSize={10} />
            <Text fontSize="3xl">Profile</Text>
          </Box>
        </Link>
        <Link
          href="/home/settings/Settings"
          _hover={{ textDecoration: "none" }}
        >
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={5}
            p={2}
            transition="0.2s"
            _hover={{ opacity: "0.5" }}
          >
            <Icon as={AiOutlineSetting} mr={4} boxSize={10} />
            <Text fontSize="3xl">Settings</Text>
          </Box>
        </Link>
      </Box>
      <Box>
        <Divider h="720px" orientation="vertical" position="sticky" ml={14} />
      </Box>
    </Box>
  );
};
