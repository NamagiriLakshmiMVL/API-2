const imgdiv = document.querySelector(".container")

fetch("https://meowfacts.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => {
        let elem = document.createElement("h2")  //creating h2 for displaying facts
        elem.innerText=data.data[0]
        imgdiv.appendChild(elem)
    })