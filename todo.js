const form = document.querySelector('form')
const list = document.querySelector('#list');
const input = document.querySelector('#task');
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value === ""){
        alert("You Must Write Something!!!")
    }else{
    const li = document.createElement('li');
    li.innerText = input.value
    list.append(li);
    const btn = document.createElement('button');
    btn.innerText = "Delete"
    list.append(btn)


    input.value = "";
}
})

list.addEventListener('click', function(e){
    e.target
})

  








//  const del = document.createElement('button');
// del.classList.add('delete');
// del.innerHTML = "Delete";
// list.append(del);
// del.addEventListener('click', function(e){
// list.removeChild(li);
// })