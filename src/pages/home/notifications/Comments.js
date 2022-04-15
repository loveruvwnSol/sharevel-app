import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "../../../components/home/topBar";
import { SideNavi } from "../../../components/home/sideNavi";
import { Comments } from "../../../components/home/notifications/comments";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const CommentsPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");
  return (
    <Box bg={bg} color={color}>
      <Box>
        <TopBar />
        <Box display="flex">
          <Box>
            <SideNavi />
          </Box>
          <Box>
            <Comments />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentsPage;
