import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseApp = 
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
{
    apiKey: "AIzaSyCCGkQtARotqOFYlj6soVS5_Y5HpoDawBs",
    authDomain: "clone-a9fd0.firebaseapp.com",
    projectId: "clone-a9fd0",
    storageBucket: "clone-a9fd0.appspot.com",
    messagingSenderId: "423175426009",
    appId: "1:423175426009:web:e94524bff3f6a2616d13c8",
    measurementId: "G-RMFERG4RKW"
  }

  const app = initializeApp(firebaseApp)
const auth = getAuth(app)

export {auth};

