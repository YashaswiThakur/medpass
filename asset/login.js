firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("login_div").style.display = "none";
      document.getElementById("reg_div").style.display = "none";
  
      let user = firebase.auth().currentUser;
  
      if(user != null){
        location.replace("/home.html")
      }
  
    } else {
      // No user is signed in.
      document.getElementById("login_div").style.display = "block";
      document.getElementById("reg_div").style.display = "none";
    }
  });
  
  function login(){
      console.log("booooooooooooooooooooooo")
  
    let userEmail = document.getElementById("email_field").value;
    let userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
  
      window.alert("Error : " + errorMessage+"\nCODE:"+errorCode);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut().then(function() {
        location.replace("/index.html")
        // Sign-out successful.
      }).catch(function(error) {
          console.log(error)
      });
    
  }


  function register(){
    

      let regUserEmail = document.getElementById("reg_email_field").value;
      let regUserPass = document.getElementById("reg_password_field").value;

      firebase.auth().createUserWithEmailAndPassword(regUserEmail, regUserPass).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
  }
  function signin(){
    document.getElementById("login_div").style.display = "block";
    document.getElementById("reg_div").style.display = "none";
  }
  function regModal(){
    document.getElementById("login_div").style.display = "none";
    document.getElementById("reg_div").style.display = "block";
  }