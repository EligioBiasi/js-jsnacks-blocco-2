
const ulElement = document.querySelector('ul');

for(let i = 0; i<10; i++){
    ulElement.appendChild(newItem());
    
}

function newItem(){
    const Item = document.createElement('li');
    Item.innerHTML='è un`oggetto'
    return Item
}
