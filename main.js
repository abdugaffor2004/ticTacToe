const area = document.querySelector('.area')
let move = 0;
let result = ''
const boxes = document.getElementsByClassName('area-element')
const wrap = document.querySelector('.wrap')
const content = document.querySelector('.content')
const button = document.querySelector('.button')
const audioCross = document.querySelector('.crossSound')
const audioNought = document.querySelector('.noughtSound')
const audioDraw = document.querySelector('.drawSound')
const audioWin = document.querySelector('.winSound')
const audioMatch = document.querySelector('.ringing')
const audioClose = document.querySelector('.closeSound')


area.addEventListener('click', event => {


    if(event.target.className === 'area-element' ){
       if(move % 2 === 0 ){
        event.target.innerHTML = '<img class="img" src="img/iconmonstr-x-mark-2 .svg" alt="X">'
        audioCross.play()
       } 
       
       else{
        event.target.innerHTML = '<img class="img" src="img/iconmonstr-circle-2.svg" alt=""> '
        audioNought.play()
       }
        
        move++
        check()
    }


})



const check = () =>{


const arr = [
    /*Horizontal*/
    [0,1,2],
    [3,4,5],
    [6,7,8],
    /*Vertical*/
    [0,3,6],
    [1,4,7],
    [2,5,8],
    /*Cross*/
    [2,4,6],
    [0,4,8]

]

for(let i = 0; i < arr.length; i++){

/* Здесь boxes[arr[[i][0] или [1] или [2] определяет индекс значения в каждом массиве arr по которому прошёлся цикл for. И эти массивы можно получить через переменную i]] */
    if( boxes[arr[i][0]].innerHTML === '<img class="img" src="img/iconmonstr-x-mark-2 .svg" alt="X">' && boxes[arr[i][1]].innerHTML === '<img class="img" src="img/iconmonstr-x-mark-2 .svg" alt="X">' && boxes[arr[i][2]].innerHTML === '<img class="img" src="img/iconmonstr-x-mark-2 .svg" alt="X">' ){
        
        boxes[arr[i][0]].querySelector('.img').classList.add('animation')
        boxes[arr[i][1]].querySelector('.img').classList.add('animation')
        boxes[arr[i][2]].querySelector('.img').classList.add('animation')
        
        setTimeout( () => audioMatch.play(), 1000  )
        

        result = 'Crosses won!'
        setTimeout(showresult, 1500)
    }
    
    else if( boxes[arr[i][0]].innerHTML === '<img class="img" src="img/iconmonstr-circle-2.svg" alt=""> ' && boxes[arr[i][1]].innerHTML === '<img class="img" src="img/iconmonstr-circle-2.svg" alt=""> ' && boxes[arr[i][2]].innerHTML === '<img class="img" src="img/iconmonstr-circle-2.svg" alt=""> ' ){
        
        boxes[arr[i][0]].querySelector('.img').classList.add('animation')
        boxes[arr[i][1]].querySelector('.img').classList.add('animation')
        boxes[arr[i][2]].querySelector('.img').classList.add('animation')

        setTimeout( () => audioMatch.play(), 1000)

        result = 'Noughts won!'
        setTimeout(showresult, 1500)
        
    }

    

}

if(move === 9){

    result = 'Draw'
    showresult(result)
    
}

}



const showresult = () =>{

if(result == 'Crosses won!'){
    wrap.style.display = 'block'
    audioWin.play()
    content.innerHTML = '<p class="paragraph">Winner!</p> <img src="img/iconmonstr-x-mark-2  modal.svg" class="img2" alt="X">'
    button.addEventListener('click', closeModal)
}


else if(result == 'Noughts won!'){
    wrap.style.display = 'block'
    audioWin.play()
    content.innerHTML = ' <p class="paragraph">Winner!</p> <img class="img3" src="img/iconmonstr-circle-2 modal.svg" alt=""> '
    button.addEventListener('click', closeModal)
}

else {
    wrap.style.display = 'block'
    audioDraw.play()
    content.innerHTML = '<div class="paragraph2"> <h1 class="draw-text"> Draw </h1> <p style="margin: 5px;">Try it again.</p>  <span style="width: 200px;" > Now you have more chances to win! &#128521</span> </div>'
    button.addEventListener('click', closeModal)
}
    

}

const closeModal = () =>{

    audioClose.play()
    wrap.style.display = 'none' 
    setTimeout( () => location.reload(), 300) 

}

