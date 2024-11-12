import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAQlLMNxHF8UCMY6Y4XdwoKDMEL5-8SFAo",
    authDomain: "maradiana-78f8a.firebaseapp.com",
    projectId: "maradiana-78f8a",
    storageBucket: "maradiana-78f8a.firebasestorage.app",
    messagingSenderId: "546503599173",
    appId: "1:546503599173:web:c646f27a599275eb392f2c",
    measurementId: "G-Z282P46HHQ"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);