// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMnMtZOp1YzeK9NG-RiVxlH0wWd8Qt0fg",
    authDomain: "firstproject-bcd06.firebaseapp.com",
    databaseURL: "https://firstproject-bcd06.firebaseio.com",
    projectId: "firstproject-bcd06",
    storageBucket: "",
    messagingSenderId: "339307432234"
  };
  firebase.initializeApp(config);
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  // Function to get get form values
  function submitForm(e){
      e.preventDefault();
      // Get values
      var name = getInputVal('name');
      var email = getInputVal('email');
      var number = getInputVal('number');
      var message = getInputVal('message');
      saveMessage(name ,email ,number ,message);
      // Clear form
      document.getElementById('contactForm').reset();
  }
  // References the messages collection
  var messagesRef = firebase.database().ref('messages');
  // Save message to firebase
  function saveMessage(name ,email ,number ,message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email:email,
        number:number,
        message:message
      });
    }
  //getting values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  