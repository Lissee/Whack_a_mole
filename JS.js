let countStars = 0;
let countDream = 0;
let starText = document.getElementById('stars')
let dreamText = document.getElementById('dreams')
let asd = null
let index

let button = document.querySelector("button");
let interval = null

button.addEventListener("click", function() {

    if (button.textContent === 'Начать!') {
        countStars = 0
        countDream = 0
        starText.textContent = countStars
        interval = setInterval(() => {
            addMole()
        }, 1000)
        button.textContent = 'стоп!'

        setTimeout(function (){
            clearInterval(interval)
            button.textContent = 'Начать!'
        }, 30000)
    } else {
        clearInterval(interval)
        button.textContent = 'Начать!'
    }

});


function getRandomIndex() {
    return Math.floor(Math.random() * 9 + 1);
}

function addStar () {
    countStars++
    if(countStars%10===0){
        countDream++
        dreamText.textContent = countDream
    }
    console.log("countStars")
    starText.textContent = countStars
    document.getElementById('mole').remove()
    document.getElementById(index).removeEventListener("click", addStar)
}

function addMole () {
    index = getRandomIndex()

    document.getElementById(index).insertAdjacentHTML("beforeend",
        '<div class="mole" id="mole"> </div>')

    let mole = document.getElementById('mole');

    document.getElementById(index).addEventListener("click", addStar)

    asd = setTimeout( () => {
        document.getElementById(index).removeEventListener("click", addStar)

        if (document.getElementById('mole') != null) {
            document.getElementById('mole').remove();
        }
        clearTimeout(asd)
    }, 800)
}
