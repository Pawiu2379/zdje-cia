const zdjecia = ["src/imgs/image1.png", "src/imgs/image2.png", "src/imgs/image3.png", "src/imgs/image4.png", "src/imgs/image5.png"]

let index = 0
let adsd = setInterval(defult, 500)

function defult() {
    document.getElementById('pokemon').src = zdjecia[index]
    index++
    if (index > 4) {
        index = 0
    }
}

document.getElementById('next').addEventListener('click', () => {
    index + 1
    clearInterval(adsd)
    defult()
})
document.getElementById('previous').addEventListener('click', () => {
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

<<<<<<< HEAD
document.getElementById('pokemon').addEventListener('contextmenu', () => {
    clearInterval(adsd)
    set()
})
=======
>>>>>>> parent of acb450e (git)

})