
// Schreibe eine kleine App, die Dir den "key", den "keyCode" und  den "Code" anzeigt, sobald Du eine Taste auf deinem Keyboard drückst.

let output = document.getElementById("output")
let key = document.getElementById("key")
let keycode = document.getElementById("keycode")

const myEvent = (event) => {
    console.log(event)
    output.innerHTML = event.keyCode
    key.innerHTML = event.key
    keycode.innerHTML = event.keyCode
    code.innerHTML = event.code
}


document.addEventListener("keydown", (event) => myEvent(event))