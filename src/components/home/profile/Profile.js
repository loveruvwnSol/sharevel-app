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
  textDecoration,
} from "@chakra-ui/react";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import logo from "../../../images/ShareVel.svg";
import italyTown from "../../../images/italy_town.jpeg";
import userIcon from "../../../images/icons/user_icon.svg";
import LikeIcon from "../../../images/icons/heart.svg";
import redLikeIcon from "../../../images/icons/redHeart.svg";
import commentIcon from "../../../images/icons/comment.svg";
import linkIcon from "../../../images/icons/link.svg";
import menuIcon from "../../../images/icons/menu.svg";
import shavelIcon from "../../../images/shareVelIcon.svg";
import americanIcon from "../../../images/american.svg";
import officialMark from "../../../images/icons/officialCheck.svg";
import { HeartIcon } from "../../../images/icons/createIcon";
import { RedHeartIcon } from "../../../images/icons/createIcon";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { AddPost } from "../post/addPost";
import { nanoid } from "nanoid";

export const Profile = ({ data }) => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#fff", "#333");
  const color = useColorModeValue("#393E46", "#fff");
  const fwColor = useColorModeValue("#5F5F5F", "#fff");
  const userId = "@" + nanoid();
  return (
    <Box pl={20} fontFamily="inter" zIndex={1} color={color} bg={bg}>
      <Box w="800px" h="fix" border="1px solid #E2E8F0" mb={14}>
        <Box>
          <Text
            fontWeight="Medium"
            fontSize="3xl"
            color={color}
            mt={3}
            mb={3}
            ml={3}
          >
            Profile
          </Text>
          <Divider />
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={3}
            mb={3}
            ml={3}
          >
            <Icon
              boxSize={36}
              border="1px solid #EEEEEE"
              borderRadius="50%"
              as={BiUserCircle}
              mr={3}
            />
            <Box>
              <Box>
                <Box display="flex" justifyContent="left" alignItems="center">
                  <Text fontWeight="Medium" fontSize="3xl">
                    use name
                  </Text>
                  <Text
                    color="#00ADB5"
                    fontSize="lg"
                    ml={5}
                    textDecoration="2px underline"
                  >
                    Lv.1
                  </Text>
                </Box>
                <Text fontWeight="Medium" fontSize="sm" mb={5} color={fwColor}>
                  {userId}
                </Text>
              </Box>
              <Text fontWeight="Medium" color={fwColor} fontSize="lg" mb={3}>
                {/* hi. i like travel. */}
              </Text>
              <Box display="flex">
                <Text
                  fontWeight="Medium"
                  fontSize="lg"
                  mb={3}
                  color={fwColor}
                  _hover={{ textDecoration: "2px underline" }}
                >
                  0 Following
                </Text>
                <Text
                  fontWeight="Medium"
                  fontSize="lg"
                  ml={5}
                  mb={3}
                  color={fwColor}
                  _hover={{ textDecoration: "2px underline" }}
                >
                  0 Followers
                </Text>
              </Box>
            </Box>
            {/* <Image w={5} src={officialMark.src} /> */}
            <Box ml="auto">
              <Image
                boxSize={8}
                src={menuIcon.src}
                mr={3}
                _hover={{
                  background: "#EEEEEE",
                  borderRadius: "50px",
                  transition: "0.2s",
                }}
              />
            </Box>
          </Box>
          <Divider />
          {data &&
            Object.entries(data).map(([key, val]) => (
              <AddPost key={key} image={val.image} text={val.text} />
            ))}
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};
