let area = document.querySelector('.area')
let num = 0
let result = 'Игра не закончена!'
document.querySelector('.win').innerHTML = result
let button = document.querySelector('button')


area.onclick = function(event){
    if (event.target.className == 'block'){
        if (event.target.innerHTML != 'X'){
            if (event.target.innerHTML != 'O'){
                if (num % 2 == 0){
                event.target.innerHTML = 'X'
                }else{
                event.target.innerHTML = 'O'
                }
                num++
                checkWin()
                document.querySelector('.win').innerHTML = result
    
                function checkWin() {
                   const boxes = document.getElementsByClassName('block')
                   const arr = [
                       [0,1,2],
                       [3,4,5],
                       [6,7,8],
                       [0,3,6],
                       [1,4,7],
                       [2,5,8],
                       [0,4,8],
                       [2,4,6],
                    ]
                for (let i = 0; i<arr.length; i++){
                    if (boxes [arr[i][0]].innerHTML == 'X' && boxes [arr[i][1]].innerHTML == 'X' && boxes [arr[i][2]].innerHTML == 'X'){
                        result = 'Победили крестики!'
                    }
                    else if (boxes [arr[i][0]].innerHTML == 'O' && boxes [arr[i][1]].innerHTML == 'O' && boxes [arr[i][2]].innerHTML == 'O'){
                        result = 'Победили нолики!'
                    }
                }
                }
}   }    }       }

