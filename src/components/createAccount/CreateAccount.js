import React from "react";
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
import logo from "../../images/ShareVel.svg";

export const CreateAccount = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      bg="#EEEEEE"
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
          Create Account
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
              placeholder="Name"
              color="#393E46"
              focusBorderColor="#00ADB5"
            />
          </InputGroup>
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
            />
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
          >
            create account
          </Button>
        </Box>
        <Text mt={8} textAlign="right" color="##393E46">
          or{" "}
          <Link href="/">
            <Text as="span" color="#00ADB5" textDecor="underline">
              log in
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
