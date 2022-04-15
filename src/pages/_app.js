import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { child, get, ref, set, getDatabase } from "firebase/database";

import theme from "../theme";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd0pugPn_OPt5e5lueuHToGx1vAq49Xo0",
  authDomain: "sharevel-9034f.firebaseapp.com",
  databaseURL:
    "https://sharevel-9034f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sharevel-9034f",
  storageBucket: "sharevel-9034f.appspot.com",
  messagingSenderId: "624958295205",
  appId: "1:624958295205:web:e8c3bb3ed051f2a2b2914c",
  measurementId: "G-T5HQ591DHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth(app);
export const db = getDatabase(app);
// export const db = getDatabase(
//   "https://sharevel-9034f-default-rtdb.europe-west1.firebasedatabase.app"
// );
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
