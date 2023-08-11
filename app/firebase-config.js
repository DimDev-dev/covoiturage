import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBe_WxmiHieZ6tPnAKP3ohqaOo-YrfVLVc",
  authDomain: "testt-5caa7.firebaseapp.com",
  projectId: "testt-5caa7",
  storageBucket: "testt-5caa7.appspot.com",
  messagingSenderId: "640484578834",
  appId: "1:640484578834:web:bd14da7b157f678d1c6acb",
  measurementId: "G-HV4EN1852X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)