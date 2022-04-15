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

export const Messages = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  const inputColor = useColorModeValue("#A9A9A9", "#666");
  const inputBg = useColorModeValue("#EEEEEE", "#666");

  return (
    <Box fontFamily="inter" color={color} bg={bg} display="flex" zIndex={1}>
      <Box>
        <Box pt={5} ml={5} mb={52}>
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mb={5}
            pr={52}
          >
            <Image
              border="1px solid #EEEEEE"
              borderRadius="50%"
              src={shavelIcon.src}
              ml={2}
              mr={3}
            />
            <Box>
              <Text mb={2} color="#A9A9A9" whiteSpace="nowrap">
                ShareVel_official
              </Text>
              <Text
                pl={5}
                pr={5}
                pt={1}
                pb={1}
                fontWeight="Medium"
                fontSize="xl"
                textAlign="left"
                border="1px solid #E2E8F0"
                borderRadius="50px"
              >
                hello.what are you doing ?
              </Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="right" alignItems="center" mr={2}>
            <Text
              pl={5}
              pr={5}
              pt={1}
              pb={1}
              fontWeight="Medium"
              fontSize="xl"
              textAlign="left"
              border="1px solid #E2E8F0"
              background="#00ADB5"
              color="#fff"
              borderRadius="50px"
            >
              hi.i'm going out by car from now on.
            </Text>
          </Box>
          <Box display="flex" justifyContent="left" alignItems="center" mb={5}>
            <Image
              border="1px solid #EEEEEE"
              borderRadius="50%"
              src={shavelIcon.src}
              ml={2}
              mr={3}
            />
            <Box>
              <Text mt={2} mb={2} color="#A9A9A9" whiteSpace="nowrap">
                ShareVel_official
              </Text>
              <Text
                pl={5}
                pr={5}
                pt={1}
                pb={1}
                fontWeight="Medium"
                fontSize="xl"
                textAlign="left"
                border="1px solid #E2E8F0"
                borderRadius="50px"
              >
                wow! it's nice.
              </Text>
            </Box>
          </Box>
          <Box>
            {message.map((m) => (
              <Box
                display="grid"
                justifyContent="right"
                alignItems="center"
                mr={2}
                mb={2}
              >
                <Text
                  pl={5}
                  pr={5}
                  pt={1}
                  pb={1}
                  fontWeight="Medium"
                  fontSize="xl"
                  textAlign="left"
                  border="1px solid #E2E8F0"
                  background="#00ADB5"
                  color="#fff"
                  borderRadius="50px"
                >
                  {m}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box position="fixed" bottom="0" ml={0.3}>
          <Divider w="640px" bottom="0.5" mb={5} />
          <InputGroup w={96} bottom="0" mb={14} ml={32}>
            <>
              <InputLeftElement
                pointerEvents="none"
                children={<EditIcon color="#A9A9A9" mr={5} />}
              />
              <Input
                id="messagebox"
                label="text"
                fontSize="xl"
                variant="filled"
                placeholder="Send message"
                bg={inputBg}
                value={text}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setMessage([...message, text]);
                    setText("");
                    console.log(e.target.value);
                  }
                  // else if ((e.key = "Enter") && (e.target.value = null)) {
                  //   !setMessage([...message, text]);
                  //   alert("not input text");
                  //   console.log("not input text");
                  // }
                }}
              />
            </>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};
