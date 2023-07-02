import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQBOCM37MCRVh4_EjJeLKxdNWMcHMWH8Q",

  authDomain: "lor-cards-api.firebaseapp.com",

  projectId: "lor-cards-api",

  storageBucket: "lor-cards-api.appspot.com",

  messagingSenderId: "43460187271",

  appId: "1:43460187271:web:77c7c63448021dde60d422",

  measurementId: "G-SEBJ9H8234",
};

const app = initializeApp(firebaseConfig);

export default app;
