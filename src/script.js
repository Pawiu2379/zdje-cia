const zdjecia =["src/imgs/image1.png","src/imgs/image2.png","src/imgs/image3.png","src/imgs/image4.png","src/imgs/image5.png"]

let index = 0
let adsd = setInterval(defult,5000)

function defult(){
    document.getElementById('pokemon').src=zdjecia[index]
    index++
    if(index>4){
        index=0
    }
}


document.getElementById('next').addEventListener('click',()=>{
    index+1
    document.getElementById('pokemon').src=zdjecia[index]
    
})
document.getElementById('previous').addEventListener('click',()=>{
    index-1
    document.getElementById('pokemon').src=zdjecia[index]
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(adsd)
})

document.getElementById('start').addEventListener('click',()=>{
    let adsd = setInterval(defult,500)
})