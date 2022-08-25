import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiuqUYiKk-mEokusfLe2pLhvleYqbGmDw",
  authDomain: "landingpage-mundo-invertido.firebaseapp.com",
  databaseURL:
    "https://landingpage-mundo-invertido-default-rtdb.firebaseio.com",
  projectId: "landingpage-mundo-invertido",
  storageBucket: "landingpage-mundo-invertido.appspot.com",
  messagingSenderId: "811223503020",
  appId: "1:811223503020:web:6b0c9bb71f6d12ca2c0f09",
};

export const app = initializeApp(firebaseConfig);
