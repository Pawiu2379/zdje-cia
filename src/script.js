const zdjecia = ["src/imgs/image1.png", "src/imgs/image2.png", "src/imgs/image3.png", "src/imgs/image4.png", "src/imgs/image5.png"]
let adsd;
let index = 0

var pokemons = document.getElementById('pokemon');

function set() {
    let adsd = setInterval(defult, 5000)
}

function defult() {
    document.getElementById('pokemon').src = zdjecia[index]
    index++
    if (index > 4) {
        index = 0
    }
}

document.getElementById('lewyPierwszy').addEventListener('click', () => {
    index + 1
    clearInterval(adsd)
    defult()
})
document.getElementById('prawyPierwszy').addEventListener('click', () => {
    clearInterval(adsd)
    index - 1
    defult()
})


document.getElementById('pokemon').addEventListener('click', () => {
    var check = document.getElementById('picture');
    if (check.checked) {
        let asds = setInterval(defult, 500)
    } else {
        clearInterval(adsd)
    }

    document.getElementById('pokemon').addEventListener('contextmenu', () => {
        clearInterval(adsd)
        set()
    })
})

var scsl = 0

document.getElementById('lewyDrugi').addEventListener('click', () => {
    scsl = scsl - 1
    pokemons.style.transform = `scaleY(${scsl})`
    if (scsl == -2) {
        scsl = 1
        pokemons.style.transform = `scaleY(${scsl})`
    } else {
        scsl = -1
        pokemons.style.transform = `scaleY(${scsl})`
    }
})
document.getElementById('prawyDrugi').addEventListener('click', () => {
    scsl = scsl - 1
    if (scsl == -2) {
        scsl = 1
        pokemons.style.transform = `scaleX(${scsl})`
    } else {
        scsl = -1
        pokemons.style.transform = `scaleX(${scsl})`
    }
})

var dgr = 0
document.getElementById('lewyTrzeci').addEventListener('click', () => {
    dgr = dgr + 90
    pokemons.style.transform = `rotate(${dgr}deg)`

})


var scale = 100
document.getElementById('prawyTrzeci').addEventListener('click', () => {
    scale = scale + 1
    pokemons.style.scale = `${scale}%`
})

document.getElementById('prawyTrzeci').addEventListener('contextmenu', () => {
    scale = 100
    pokemons.style.scale = `${scale}%`
})

window.onload = set()