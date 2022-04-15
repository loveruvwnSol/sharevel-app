import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from "../../images/ShareVel.svg";
import { fireAuth } from "../../pages/_app";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const LogIn = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, pass });
    const auth = fireAuth;
    console.log({ auth });
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });
        window.location.href = "/home/Home";
        console.log("success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", { errorCode, errorMessage });
      });
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#EEEEEE", "#333");
  const color = useColorModeValue("#393E46", "white");

  return (
    <Box
      bg={bg}
      color={color}
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="#fff" fontFamily="inter" p={10} borderRadius="10px">
        <Box display="flex" justifyContent="right">
          <Image src={logo.src} />
        </Box>
        <Text fontSize="4xl" color="#393E46">
          Log in
        </Text>
        <Box>
          <InputGroup mt={8}>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              fontSize="xl"
              variant="flushed"
              placeholder="Email"
              color="#393E46"
              focusBorderColor="#00ADB5"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup mt={8}>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input
              fontSize="xl"
              variant="flushed"
              type={show ? "text" : "password"}
              placeholder="password"
              color="#393E46"
              focusBorderColor="#00ADB5"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <InputRightElement>
              <Button
                h="1.75rem"
                size="sm"
                color="#393E46"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            borderColor="#00ADB5"
            color="#00ADB5"
            fontSize="lg"
            variant="outline"
            p={6}
            mt={14}
            type="submit"
            onClick={(e) => onSubmit(e)}
          >
            Log in
          </Button>
        </Box>
        <Text mt={8} textAlign="right" color="##393E46">
          or{" "}
          <Link href="createAccount/CreateAccountPage">
            <Text as="span" color="#00ADB5" textDecor="underline">
              create account
            </Text>
          </Link>
        </Text>

        {/* <Text mt={8} textAlign="left" color="##393E46">
          <Link href="home/Home">
            <Text as="span" color="#00ADB5" textDecor="underline">
              home
            </Text>
          </Link>
        </Text> */}
      </Box>
    </Box>
  );
};
