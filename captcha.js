let captcha;
function generate() {
  document.getElementById("submit").value = "";

  captcha = document.getElementById("image");
  let uniquechar = "";

  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 1; i < 5; i++) {
    uniquechar += randomchar.charAt(Math.random() * randomchar.length);
  }

  captcha.innerHTML = uniquechar;
}

function printmsg() {
  const usr_input = document.getElementById("submit").value;

  if (usr_input == captcha.innerHTML) {
    let s = (document.getElementById("key").innerHTML = "Matched");
    generate();
  } else {
    let s = (document.getElementById("key").innerHTML = "not Matched");
    generate();
  }
}
