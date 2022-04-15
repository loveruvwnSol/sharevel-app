import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "../../../components/home/topBar";
import { SideNavi } from "../../../components/home/sideNavi";
import { Profile } from "../../../components/home/profile/profile";

import { ref as storageRef, uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import {
  child,
  get,
  ref as databaseRef,
  set,
  getDatabase,
  onValue,
} from "firebase/database";
import { db } from "../../_app";
import { useClient } from "../../../hooks/useClient";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const YourProfile = () => {
  const isClient = useClient();
  const [dbData, setDbData] = useState();

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = databaseRef(db, "post/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDbData(data);
    });
  }, []);

  if (!isClient) return null;

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#333");
  const color = useColorModeValue("#393E46", "white");

  return (
    <Box bg={bg}>
      <Box>
        <TopBar />
        <Box display="flex">
          <Box>
            <SideNavi />
          </Box>
          <Box>
            <Profile data={dbData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default YourProfile;
