import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIsE5Xye4-aeBV0Iq5hl6UXaYmhZKLwiI",
  authDomain: "react-glasses-authentica-8fa0c.firebaseapp.com",
  projectId: "react-glasses-authentica-8fa0c",
  storageBucket: "react-glasses-authentica-8fa0c.appspot.com",
  messagingSenderId: "561734863916",
  appId: "1:561734863916:web:b8658defbc4923bdd49589",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
