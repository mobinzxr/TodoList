let ulList = document.getElementById('ulList')
let buttonClick = document.getElementById('button-addon2')
let inputAddTodo  = document.getElementById('inputTodo')

buttonClick.addEventListener('click',function(){
    let newLi = document.createElement('li')
    let TodoName = document.createElement('span')
    let trashButton = document.createElement('button')
    let icon = document.createElement('i')
    icon.setAttribute('class','fa-solid fa-trash')
    trashButton.setAttribute('class','btn m-0 p-0 text-light ')
    trashButton.setAttribute('onclick','trash()')
  
    trashButton.append(icon)
    TodoName.innerHTML = inputAddTodo.value
    newLi.setAttribute('class','list-group-item d-flex justify-content-between text-light')
    newLi.setAttribute('style','background-color: #861E64;')
    newLi.append ( TodoName , trashButton)
    ulList.append(newLi)
    
})
function trash(event){
 
}

