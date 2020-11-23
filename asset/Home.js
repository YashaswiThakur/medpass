firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let user = firebase.auth().currentUser;

    if (user != "null") {
      if (user.displayName != null) {
        document.getElementById("hName").innerHTML =
          " " + user.displayName.replace(/ .*/, "");
      }
    }
  } else {
  }
});
