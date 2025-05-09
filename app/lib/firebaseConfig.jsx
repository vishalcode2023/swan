// firebase/config.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onDisconnect } from "firebase/database";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBb4kINferntnAMoSf9lGtZvLAmp_IPog",
  authDomain: "swanlogin.firebaseapp.com",
  databaseURL: "https://swanlogin-default-rtdb.firebaseio.com", // Add this!
  projectId: "swanlogin",
  storageBucket: "swanlogin.appspot.com",
  messagingSenderId: "765235097263",
  appId: "1:765235097263:web:b33614ae31df7ec004ae5a",
  measurementId: "G-Y0W69NR7KZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let analytics = null;

const initAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    analytics = getAnalytics(app);
  }
};

const generateVisitorID = () => {
  let id = localStorage.getItem("visitorID");
  if (!id) {
    id = "anon_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("visitorID", id);
  }
  return id;
};

const setUserOnlineStatus = () => {
  const visitorID = generateVisitorID();
  const statusRef = ref(db, `activeUsers/${visitorID}`);

  const userStatus = {
    visitorID,
    state: "online",
    lastActive: Date.now(),
  };

  set(statusRef, userStatus);
  onDisconnect(statusRef).set({
    ...userStatus,
    state: "offline",
    lastActive: Date.now(),
  });
};

const trackPageView = (pageName) => {
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_name: pageName,
      timestamp: new Date().toISOString(),
    });
  }
};

export {
  db,
  initAnalytics,
  setUserOnlineStatus,
  trackPageView
};
