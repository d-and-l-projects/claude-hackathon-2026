// firebase.js — Firebase Auth + Firestore
// =========================================
// COMMON AUTH FIX — If Google sign-in popup does nothing or closes immediately:
//   1. Firebase Console → Authentication → Settings → Authorized domains
//   2. Add: "localhost" AND "127.0.0.1" (for local dev)
//   3. If deployed: add your actual domain (e.g. "firstadvisor.web.app")
//   4. Also check: browser popup blocker — allow popups from localhost
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVkMHMyiRUDMVP1Un_Jwgprf-drFui0CA",
  authDomain: "firstadvisor-5efe3.firebaseapp.com",
  projectId: "firstadvisor-5efe3",
  storageBucket: "firstadvisor-5efe3.firebasestorage.app",
  messagingSenderId: "548311933601",
  appId: "1:548311933601:web:3af9a026e90cd1c3ea06e0",
  measurementId: "G-HNE174JGK8"
};

let app, _auth, _db, _provider;
try {
  app = initializeApp(firebaseConfig);
  _auth = getAuth(app);
  _db = getFirestore(app);
  _provider = new GoogleAuthProvider();
  _provider.setCustomParameters({ prompt: 'select_account' });
} catch(e) {
  console.error("Firebase init error:", e);
}

export const auth = _auth;
export const db = _db;
export const googleProvider = _provider;

export async function signInWithGoogle() {
  if (!_auth) return { success:false, error:"Firebase not initialized — check firebaseConfig in firebase.js" };
  try {
    const result = await signInWithPopup(_auth, _provider);
    const user = result.user;
    if (_db) {
      await setDoc(doc(_db,"users",user.uid),{
        uid:user.uid, displayName:user.displayName,
        email:user.email, photoURL:user.photoURL,
        lastLogin:new Date().toISOString()
      },{merge:true});
    }
    return { success:true, user };
  } catch(err) {
    console.error("SignIn error:", err.code, err.message);
    if (err.code==='auth/popup-blocked' || err.code==='auth/popup-closed-by-user') {
      await signInWithRedirect(_auth, _provider);
      return { success:true, redirecting:true };
    }
    if (err.code==='auth/unauthorized-domain') {
      return { success:false, error:`Domain "${window.location.hostname}" not authorized. Add it in Firebase Console → Authentication → Settings → Authorized domains` };
    }
    return { success:false, error:err.message };
  }
}

export async function checkRedirectResult() {
  if (!_auth) return null;
  try {
    const result = await getRedirectResult(_auth);
    if (result?.user && _db) {
      await setDoc(doc(_db,"users",result.user.uid),{
        uid:result.user.uid, displayName:result.user.displayName,
        email:result.user.email, photoURL:result.user.photoURL,
        lastLogin:new Date().toISOString()
      },{merge:true});
      return result.user;
    }
  } catch(e) { console.error("Redirect result:", e); }
  return null;
}

export async function logOut() {
  if (_auth) await signOut(_auth);
  sessionStorage.clear();
  window.location.href = "./landing.html";
}

export function onAuth(callback) {
  if (!_auth) { callback(null); return ()=>{}; }
  return onAuthStateChanged(_auth, callback);
}

export function requireAuth() {
  return new Promise((resolve) => {
    if (!_auth) { resolve(null); return; }
    const unsub = onAuthStateChanged(_auth, (user) => {
      unsub();
      if (!user && !sessionStorage.getItem('demoMode')) {
        window.location.href = "./landing.html";
      } else { resolve(user); }
    });
  });
}

export async function saveProfile(uid, data) {
  if (!_db) return;
  await setDoc(doc(_db,"users",uid),{ profile:data, profileCompleted:true, updatedAt:new Date().toISOString() },{merge:true});
}

export async function getProfile(uid) {
  if (!_db) return null;
  const snap = await getDoc(doc(_db,"users",uid));
  return snap.exists() ? snap.data() : null;
}

export async function saveDocument(uid, docData) {
  if (!_db) return null;
  return await addDoc(collection(_db,"users",uid,"documents"),{ ...docData, createdAt:new Date().toISOString() });
}

export async function getUserDocuments(uid) {
  if (!_db) return [];
  const snap = await getDocs(query(collection(_db,"users",uid,"documents"),orderBy("createdAt","desc")));
  return snap.docs.map(d=>({firestoreId:d.id,...d.data()}));
}
