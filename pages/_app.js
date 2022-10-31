import '../styles/globals.css'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth'; 

import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBVdHURzRFXTSyAbi-m95VJvT3jW2oj0v8",
  authDomain: "rewardmundo.firebaseapp.com",
  projectId: "rewardmundo",
  storageBucket: "rewardmundo.appspot.com",
  messagingSenderId: "770334583127",
  appId: "1:770334583127:web:7d537d113990337fa3b612",
  measurementId: "G-Q6GZLM0396"
}; 

firebase.initializeApp(firebaseConfig); 

const auth = firebase.auth(); 
const firestore = firebase.firestore(); 

function MyApp({ Component, pageProps }) { 
  const [user] = useAuthState(auth); 

  return (
    <div data-theme="mytheme">
      <Navbar user={user} auth={auth} /> 
      <Component user={user} {...pageProps} /> 
      <Footer /> 
    </div>
  ); 
}

export default MyApp
