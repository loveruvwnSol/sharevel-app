import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "../../../components/home/TopBar";
import { SideNavi } from "../../../components/home/SideNavi";
import { SettingsList } from "../../../components/home/settings/SettingsList";
import { Acount } from "../../../components/home/settings/acount/Acount";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const SettingsPage = () => {
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
            <SettingsList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
