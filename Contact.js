const firebaseConfig = {
    apiKey: "AIzaSyBPh_8URzEnqrKRkh5dFdJNtxge9WMNIew",
    authDomain: "real-3f46a.firebaseapp.com",
    databaseURL: "https://real-3f46a-default-rtdb.firebaseio.com",
    projectId: "real-3f46a",
    storageBucket: "real-3f46a.appspot.com",
    messagingSenderId: "798663554653",
    appId: "1:798663554653:web:8e4aec76ee5d092d933fb4"
  };
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref();


const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var name = document.getElementById("name").value; 
  var email= document.getElementById("email").value; 
  var comments= document.getElementById("comments").value; 
  
  detailsRef.push().set({ 
    name: name, 
    email: email, 
    comments: comments, 
  }); 
   
 
} 