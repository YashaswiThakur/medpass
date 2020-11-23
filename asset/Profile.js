var selectedFile;
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let user = firebase.auth().currentUser;

    if (user != null) {
      document.getElementById("show").style.display = "block";
      if (user.photoURL != null) {
        document.getElementById("displayPic").src = user.photoURL;
      }
      if (user.displayName != null) {
        document.getElementById("pName").innerHTML = user.displayName;
        document.getElementById("pdName").placeholder = user.displayName;
      }
    }
  } else {
  }
});
function triggerEdit() {
  document.getElementById("show").style.display = "none";
  document.getElementById("dShow").style.display = "block";
  document.getElementById("sEdit").style.display = "none";
  document.getElementById("dsEdit").style.display = "flex";
}
function triggerFEdit() {
  $("#dp-input").on("change", function (event) {
    selectedFile = event.target.files[0];
  });
  updateName();
  document.getElementById("dShow").style.display = "none";
  document.getElementById("sEdit").style.display = "flex";
  document.getElementById("dsEdit").style.display = "none";
  document.getElementById("show").style.display = "block";
  updateDP();
  setInterval(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let user = firebase.auth().currentUser;

        if (user != null) {
          if (user.photoURL != null) {
            document.getElementById("displayPic").src = user.photoURL;
          }
          if (user.displayName != null) {
            document.getElementById("pName").innerHTML = user.displayName;
            document.getElementById("pdName").placeholder = user.displayName;
          }
        }
      } else {
      }
    });
  }, 50);
}
function updateName() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let user = firebase.auth().currentUser;

      if (user != null) {
        if (document.getElementById("pdName").value != "") {
          user
            .updateProfile({
              displayName: document.getElementById("pdName").value,
              photoURL: user.photoURL,
            })
            .then(function () {
              // Update successful.
            })
            .catch(function (error) {
              // An error happened.
            });
        }
      }
    } else {
    }
  });
}




function updateDP() {
  var filename = selectedFile.name;
  var storageRef = firebase.storage().ref("/dps/" + filename);
  var uploadTask = storageRef.child("/dps/" + filename).put(file);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    function (snapshot) {},
    function (error) {
      // Handle unsuccessful uploads
    },
    function () {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log("File available at", downloadURL);
      });
    }
  );
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#displayPicEdit").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
