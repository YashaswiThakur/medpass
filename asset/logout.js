function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      location.replace("/index.html");
      // Sign-out successful.
    })
    .catch(function (error) {
      console.log(error);
    });
}

const hamButton = document.querySelector("#hamBurger");
const navList = document.querySelector("#nav-list");

function toggleHam() {
  if (innerWidth <= 720 && innerWidth >= 0) {
    navList.classList.toggle("show");
  }
}
