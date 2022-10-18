const zdjecia = ["src/imgs/image1.png", "src/imgs/image2.png", "src/imgs/image3.png", "src/imgs/image4.png", "src/imgs/image5.png"]

let index = 0
var adsd


function set() {
    adsd = setInterval(defult, 500)
}

function defult() {
    document.getElementById('pokemon').src = zdjecia[index]
    index++
    if (index > 4) {
        index = 0
    }
}

document.getElementById('next').addEventListener('click', () => {
    index + 1
    document.getElementById('pokemon').src = zdjecia[index]

})
document.getElementById('previous').addEventListener('click', () => {
    index - 1
    document.getElementById('pokemon').src = zdjecia[index]
})


document.getElementById('pokemon').addEventListener('click', () => {
    clearInterval(adsd)
})

document.getElementById('pokemon').addEventListener('contextmenu', () => {
    set()
})

var img = document.getElementById('pokemon');

document.getElementById('rrotate').addEventListener('click', () => {
    img.style.transform = 'rotate(90deg)';
})

document.getElementById('rrotate').addEventListener('click', () => {
    img.style.transform = 'rotate(-90deg)';
})

window.onload = set()