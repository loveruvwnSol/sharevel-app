import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "../../components/home/TopBar";
import { SideNavi } from "../../components/home/SideNavi";
import { PostList } from "../../components/home/post/PostList";

import { useColorModeValue, useColorMode } from "@chakra-ui/react";

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
import { db } from "../_app";

const HomePage = (props) => {
  const [dbData, setDbData] = useState();

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = databaseRef(db, "post/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDbData(data);
    });
  }, []);

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
            <PostList data={dbData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
