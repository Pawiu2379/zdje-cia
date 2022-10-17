
function defult(){

    var img = 1
    



    function changeimg(){
        img++
        console.log(img)
        document.getElementById('pokemon').src=`./imgs/image${img}.png`

        if(file = 5){
            file = 0
        }
    }

    setTimeout(changeimg(), 5000, false)

}


window.onload= defult()