import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBgUnJSxJh2AEijSMjWEA-gLLoHmFa1PCY",
    authDomain: "todo-ad18d.firebaseapp.com",
    databaseURL: "https://todo-ad18d.firebaseio.com",
    projectId: "todo-ad18d",
    storageBucket: "todo-ad18d.appspot.com",
    messagingSenderId: "706076054223",
    appId: "1:706076054223:web:a8e2e2265dcd6d22eeddba"
  };

firebase.initializeApp(firebaseConfig);

  
export default firebase;