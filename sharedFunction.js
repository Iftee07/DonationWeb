function getValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getText(id) {
  const value = document.getElementById(id).innerText;
  return value;
}

function redirect() {
  window.location = "./blog.html";
}
