import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "../../../components/home/topBar";
import { SideNavi } from "../../../components/home/sideNavi";
import { Like } from "../../../components/home/notifications/like";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const LikePage = () => {
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
            <Like />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LikePage;
