// https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

const generateJokes = ()=>
{
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res) => res.json())
    .then((data)=>{jokes.innerHTML = data.joke}).catch((error)=>{
        alert("Some problem for loading jokes ...")
    })
}

jokebtn.addEventListener('click',generateJokes);