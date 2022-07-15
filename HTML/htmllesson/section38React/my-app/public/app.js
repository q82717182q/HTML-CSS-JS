let name = document.getElementById("myH1");
let button = document.getElementById("changeName");

button.addEventListener("click", () => {
    name.innerText = "Mike Huang";
});