var  firebaseConfig = {
    apiKey: "AIzaSyC6bnG9j-b93fI8V9mnGDN_3d3aymmd0XI",
    authDomain: "signup-17ca9.firebaseapp.com",
    databaseURL: "https://signup-17ca9-default-rtdb.firebaseio.com",
    projectId: "signup-17ca9",
    storageBucket: "signup-17ca9.appspot.com",
    messagingSenderId: "349533994118",
    appId: "1:349533994118:web:c0b11ecf0e7e981d76e507",
    measurementId: "G-FVPKPH2Z90"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Hello you have Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
