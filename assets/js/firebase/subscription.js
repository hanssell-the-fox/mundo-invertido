import { app } from "./app.js";

import {
  collection,
  getFirestore,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

export const subscribeToHellfireClub = async (subscription) => {
  const db = getFirestore(app);
  const ref = collection(db, "hellfire-club");
  const docRef = await addDoc(ref, subscription);
  return docRef.id;
};
