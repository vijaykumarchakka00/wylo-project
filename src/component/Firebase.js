import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_nHlsyASfGomMPPQb36yCyZh_jfQmmVc",
  authDomain: "wylo-project.firebaseapp.com",
  projectId: "wylo-project",
  storageBucket: "wylo-project.appspot.com",
  messagingSenderId: "234912718846",
  appId: "1:234912718846:web:81f3ef496fbf75e4cbeaaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};