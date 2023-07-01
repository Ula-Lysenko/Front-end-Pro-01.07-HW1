var name = prompt("Hello.\nTell me your name, please.");
console.log(name);
if (name == "null" || name == "") {
  txt = "No name provided";
} else {
  txt = "Hello, " + name + ", how are you?";
}
alert(txt);
