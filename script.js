let list=document.getElementById('list')
let inputbox=document.getElementById('inputBox')

function add(){
    if(inputbox.value === ''){
        alert('Give your task, then add it.')

    }
    else{
        let todo = document.createElement('li')
        todo.textContent= inputbox.value
        list.appendChild(todo)

        let cross = document.createElement('cross')
        cross.textContent='\u00d7'
        todo.appendChild(cross)
    }
    inputbox.value=''
    locStorage()
}
list.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('check')
        locStorage()
    }
    else if(el.target.tagName=='CROSS'){
        el.target.parentElement.remove()
        locStorage()
    }
})
function locStorage(){
    localStorage.setItem('todos',list.innerHTML)
}
function getdata(){
    list.innerHTML= localStorage.getItem('todos')
}
getdata()