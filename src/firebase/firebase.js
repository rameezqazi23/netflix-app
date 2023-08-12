import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk-pnnJcDkhMo-yskVImRTpsexzQUdkWo",
  authDomain: "netflix-85c2f.firebaseapp.com",
  projectId: "netflix-85c2f",
  storageBucket: "netflix-85c2f.appspot.com",
  messagingSenderId: "1098930043151",
  appId: "1:1098930043151:web:36596bc6cddcaac2caa67a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;