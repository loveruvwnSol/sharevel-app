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
import logo from "../../../images/ShareVel.svg";
import italyTown from "../../../images/italy_town.jpeg";
import commentIcon from "../../../images/icons/comment.svg";
import linkIcon from "../../../images/icons/link.svg";
import menuIcon from "../../../images/icons/menu.svg";
import shavelIcon from "../../../images/shareVelIcon.svg";
import americanIcon from "../../../images/american.svg";
import officialMark from "../../../images/icons/officialCheck.svg";
import filePlus from "../../../images/icons/filePlus.svg";
import { FilePlusBlue } from "../../../images/icons/createIcon";
import { BatuIcon } from "../../../images/icons/createIcon";
import { HeartIcon } from "../../../images/icons/createIcon";
import { RedHeartIcon } from "../../../images/icons/createIcon";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { LinkIcon, SettingsIcon } from "@chakra-ui/icons";
import TopBar from "../TopBar";
import editIcon from "../../../images/icons/edit.svg";
import fileCheck from "../../../images/icons/fileCheck.svg";

import { useDropzone } from "react-dropzone";

import { nanoid } from "nanoid";

import { ref as storageRef, uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import {
  child,
  get,
  ref as databaseRef,
  set,
  getDatabase,
} from "firebase/database";
import { db } from "../../../pages/_app";

export const PostSettings = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [images, setImages] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const [postText, setPostText] = useState("");
  const dbRef = getDatabase();

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL;
    console.log(acceptedFiles);
    setImages(acceptedFiles);
    setImageURL(createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const onSubmit = () => {
    const fileName = nanoid();
    const storage = getStorage();
    const imagesRef = storageRef(storage, "images/" + fileName);

    console.log(typeof images);
    uploadBytes(imagesRef, images[0]).then((snapshot) => {
      alert("Uploaded a your post!");
    });

    set(databaseRef(db, "post/" + nanoid()), {
      text: postText,
      image: fileName,
    })
      .then(() => console.log("sent"))
      .catch((e) => console.log(e));

    setImages(null);
    setImageURL(null);
    setPostText("");
    window.location.reload();
    setIsOpen(!isOpen);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  const inputColor = useColorModeValue("#A9A9A9", "#666");
  const inputBg = useColorModeValue("#EEEEEE", "#666");

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
              Create a new post
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
            {images ? (
              <Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={14}
                >
                  <AspectRatio w={72} ratio={4 / 3} border="1px solid #A9A9A9">
                    <Image src={imageURL} alt="preview" />
                  </AspectRatio>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={8}
                >
                  <Box {...getRootProps()} mr={2}>
                    <IconButton icon={<FilePlusBlue boxSize={8} />} />
                    <Input {...getInputProps()} />
                  </Box>
                  <Box>
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
                        onChange={(e) => setPostText(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={10}
                >
                  <Button
                    color="#fff"
                    bgColor="#00ADB5"
                    display="flex"
                    justifyContent="center"
                    fontSize="lg"
                    gap={3}
                    onClick={onSubmit}
                  >
                    post
                    <Image src={fileCheck.src} />
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box mt={32} {...getRootProps()}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FilePlusBlue
                      boxSize={24}
                      _hover={{ opacity: "0.5", transition: "0.2s" }}
                    />
                  </Box>
                  <Text textAlign="center" fontSize="2xl" mt={8}>
                    choose your proud image !
                  </Text>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={4}
                    w="full"
                  >
                    <Input {...getInputProps()} />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
