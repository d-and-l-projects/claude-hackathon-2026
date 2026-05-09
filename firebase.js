// firebase.js — Firebase Auth + Firestore setup
// -----------------------------------------------
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (e.g. "finlens")
// 3. Enable Authentication → Sign-in method → Google
// 4. Enable Firestore Database (start in test mode for dev)
// 5. Register a Web App and copy your firebaseConfig below
// 6. npm install firebase  (or use CDN — see index.html)
// -----------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, where, orderBy }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⚠️ REPLACE THIS with your actual Firebase config from the console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// ---- Auth helpers ----

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // Create or update user profile in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: new Date().toISOString()
    }, { merge: true });
    return { success: true, user };
  } catch (err) {
    console.error("Sign in error:", err);
    return { success: false, error: err.message };
  }
}

export async function logOut() {
  await signOut(auth);
  window.location.href = "/pages/landing.html";
}

export function onAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

// Redirect to login if not authenticated
export function requireAuth() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      unsub();
      if (!user) {
        window.location.href = "/pages/landing.html";
      } else {
        resolve(user);
      }
    });
  });
}

// ---- User profile (onboarding answers) ----

export async function saveProfile(uid, profileData) {
  await setDoc(doc(db, "users", uid), {
    profile: profileData,
    profileCompleted: true,
    updatedAt: new Date().toISOString()
  }, { merge: true });
}

export async function getProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ---- Document history ----

export async function saveDocument(uid, docData) {
  // docData: { name, type, text, analysisResult, createdAt }
  return await addDoc(collection(db, "users", uid, "documents"), {
    ...docData,
    createdAt: new Date().toISOString()
  });
}

export async function getUserDocuments(uid) {
  const q = query(
    collection(db, "users", uid, "documents"),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
