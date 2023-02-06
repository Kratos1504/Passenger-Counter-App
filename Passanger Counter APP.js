let passangercount = 0

function increment() {
    passangercount += 1
    document.getElementById("count-el").innerText = passangercount
    console.log("button is clicked !")
}
function save() {
    document.getElementById("save-el").innerHTML += " " + document.getElementById("count-el").innerText + " -"
    document.getElementById("count-el").innerText = 0
    passangercount = 0
    console.log("Passanger count is " + document.getElementById("count-el").innerText)
}