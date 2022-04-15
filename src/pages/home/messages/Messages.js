import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "../../../components/home/topBar";
import { SideNavi } from "../../../components/home/sideNavi";
import { MessagesList } from "../../../components/home/messages/messageList";
import { Messages } from "../../../components/home/messages/messages";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const MessagesPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  return (
    <Box color={color} bg={bg}>
      <Box>
        <TopBar />
        <Box display="flex">
          <Box>
            <SideNavi />
          </Box>
          <Box>
            <MessagesList />
          </Box>
          <Box>
            <Messages />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessagesPage;
