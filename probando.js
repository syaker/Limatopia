// Objeto de credenciales
const firebasemock = require("firebase-mock");
const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth
);
// const authGmail = () => {
// 	const provider = new firebase.auth.GoogleAuthProvider();
// 	return firebase.auth().signInWithPopup(provider);
//   };
const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	return firebase.auth()
	  .signInWithPopup(provider) //
	//   .then((result) => {
	// 	// This gives you a Google Access Token. You can use it to access the Google API.
	// 	const token = result.credential.accessToken;
	// 	// The signed-in user info.
	// 	const user = result.user;
	// 	console.log(result)
	//   })
	//   .catch((error) => {
	// 	// Handle Errors here.
	// 	const errorCode = error.code;
	// 	const errorMessage = error.message;
	// 	// The email of the user's account used.
	// 	const email = error.email;
	// 	// The firebase.auth.AuthCredential type that was used.
	// 	const credential = error.credential;
	// 	return error
	//   });
  };

//console.log(authFacebook())

const authEmailPassword = (email, password) =>
  {return firebase.auth().signInWithEmailAndPassword(email, password)};

  console.log(authEmailPassword())