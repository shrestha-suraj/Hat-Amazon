// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth'

// const config={
//     apiKey: "AIzaSyCjj1CEjDYELThHN_XhZR99Z26ZSIySabk",
//     authDomain: "crwn-db-5a200.firebaseapp.com",
//     databaseURL: "https://crwn-db-5a200.firebaseio.com",
//     projectId: "crwn-db-5a200",
//     storageBucket: "crwn-db-5a200.appspot.com",
//     messagingSenderId: "641552959322",
//     appId: "1:641552959322:web:7aefdde1504e2fca819563",
//     measurementId: "G-KM326PT5JL"
//   };

// firebase.initializeApp(config)

// export const auth=firebase.auth()
// export const firestore=firebase.firestore()

// const provider=new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt:'select_account'})
// export const signInWithGoogle=()=>auth.signInWithPopup(provider)

// export default firebase;



import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const config={
    apiKey: "AIzaSyCjj1CEjDYELThHN_XhZR99Z26ZSIySabk",
    authDomain: "crwn-db-5a200.firebaseapp.com",
    databaseURL: "https://crwn-db-5a200.firebaseio.com",
    projectId: "crwn-db-5a200",
    storageBucket: "crwn-db-5a200.appspot.com",
    messagingSenderId: "641552959322",
    appId: "1:641552959322:web:7aefdde1504e2fca819563",
    measurementId: "G-KM326PT5JL"
  };


firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'})

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase

export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`)
  const snapShot=await userRef.get()
  if(!snapShot.exists){
    const {displayName,email}=userAuth
    const createdAt=new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("Error creating user",error.message)
    }
  }

  return userRef;
}











