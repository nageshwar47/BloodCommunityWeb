const firebaseConfig = {
    apiKey: "AIzaSyAwPOySKzX9bSqCrMTJ70Z5Qz6vIM-Iy-I",
    authDomain: "bloodcommunity-93ba5.firebaseapp.com",
    databaseURL: "https://bloodcommunity-93ba5-default-rtdb.firebaseio.com",
    projectId: "bloodcommunity-93ba5",
    storageBucket: "bloodcommunity-93ba5.appspot.com",
    messagingSenderId: "763477311398",
    appId: "1:763477311398:web:8a10b417c2dbad9ec05967",
    measurementId: "G-1TZQ69ZGRE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

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

window.location.href = "index1.html";

}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}