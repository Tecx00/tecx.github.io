/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openPrompt() {
  var prompt = document.getElementById('prompt');
  prompt.classList.add('active');
}

function closePrompt() {
  var prompt = document.getElementById('prompt');
  prompt.classList.remove('active');
}


function handleLoad() {
  const logo = document.getElementById('logo');
  logo.classList.add('loaded');
}



