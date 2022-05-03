import "./index.css"
import "./notes.jpg"

let main = document.getElementById("main")



let img = document.createElement("img")
img.src = "./notes.jpg"


let input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","notes")

let submit = document.createElement("button")
submit.appendChild(document.createTextNode("Submit"));
submit.addEventListener("click", note)

main.append(img,input,submit)

let data = JSON.parse(localStorage.getItem("notes")) || []
function note()
{
    let notes = document.getElementById("notes").value;

    data.push(notes)

    localStorage.setItem("notes",JSON.stringify(data))

    display(data)
}

function display(data)
{
    document.getElementById("display").innerHTML = "";
    data.map((e)=>{
        let div = document.createElement("div")
        div.textContent = e;

        document.getElementById("display").append(div)
    })
}