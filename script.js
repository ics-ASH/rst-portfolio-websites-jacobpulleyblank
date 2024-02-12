function greeter() {
    let name = prompt("What's your name?");
    document.getElementById("greet").innerHTML =
    "Hi "+name+"!";
}