firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("login_div").style.display = "none";
    document.getElementById("reg_div").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";

    let user = firebase.auth().currentUser;

    if (user != null) {
      location.replace("/home.html");
    }
  } else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";
    document.getElementById("reg_div").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";
  }
});

function login() {
  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      //   let errorCode = error.code;
      //   let errorMessage = error.message;
      //   window.alert("Error : " + errorMessage + "\nCODE:" + errorCode);
      document.getElementById("wEnP").style.display = "block";
    });
}

function register() {
  let regUserEmail = document.getElementById("reg_email_field").value;
  let regUserPass = document.getElementById("reg_password_field").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(regUserEmail, regUserPass)
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
    });
}
function signin() {
  document.getElementById("login_div").style.display = "block";
  document.getElementById("reg_div").style.display = "none";
  document.getElementById("resetPassword").style.display = "none";
}
function regModal() {
  document.getElementById("login_div").style.display = "none";
  document.getElementById("reg_div").style.display = "block";
  document.getElementById("resetPassword").style.display = "none";
}

function glogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

function fPass() {
  document.getElementById("login_div").style.display = "none";
  document.getElementById("reg_div").style.display = "none";
  document.getElementById("resetPassword").style.display = "block";
}

function rPass() {
  var auth = firebase.auth();
  var emailAddress = document.getElementById("resetPassEmail").value;

  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {})
    .catch(function (error) {
      document.getElementById("eidNF").style.display = "block";
    });
}
