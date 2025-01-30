// Zadaca 1

const redBox = document.getElementById("red-box")
const greenBox = document.getElementById("green-box")
const blueBox = document.getElementById("blue-box")

function oneAlert(color) {
    alert(`You clicked on the ${color} box!`)
}

redBox.addEventListener("click", () => {
    oneAlert("red")
})

greenBox.addEventListener("click", (event) => {
    event.stopPropagation()
    oneAlert("green")
})

blueBox.addEventListener("click", (event) => {
    event.stopPropagation()
    oneAlert("blue")
})