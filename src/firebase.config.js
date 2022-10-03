import { getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCUjwTs5tsOHq7GUpGs6TzmTeyfEtW02dQ",
    authDomain: "restaurantapp-f7f2c.firebaseapp.com",
    databaseURL: "https://restaurantapp-f7f2c-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-f7f2c",
    storageBucket: "restaurantapp-f7f2c.appspot.com",
    messagingSenderId: "865566021523",
    appId: "1:865566021523:web:16c12d07fb27074f7c7a66"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };