const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "";

async function getJoke(){
    try {
        jokeEl.innerText = "";
        btnEl.disabled = true;
        btnEl.innerText = "";
    } catch (error) {
        jokeEl.innerText = "";
        btnEl.disabled = false;
        btnEl.innerText = "";
        console.log(error);
    }
}

btn.addEventListener("click", getJoke);