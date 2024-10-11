//Obteniendo el dato de la clave itemList que se encuentra almacenado en el Local Storage.
var items = localStorage.getItem('itemList');
//Condicional Ternario
//Se convierte la información de la clave en un arreglo.
items = items ? items.split(',') :  [] ;
showItems();

function addItem(){
    let item = document.getElementById("product-name").value;
    if(item){
        items.push(item);
        showItems();
    }        
}

function showItems(){    
    document.getElementById("product-name").value = '';

    let html = "";
    for(let i = 0; i < items.length; i++){
        html += `<div class='col-6 m-2'>${items[i]}</div>`; 
        html += `<div class= 'col-2 m-2'> <input type='button' class='btn btn-danger' onclick='deleteItem(${i})' value='X'> </div>`;
    }
    //Se guarda el dato de la clave itemList que esta en LocalStorage
    localStorage.setItem('itemList',items);
    //Inserta los elementos html al contenedor con id "item-list"
    document.getElementById('item-list').innerHTML = html;
}

function deleteItem(item){        
    // items.splice(1,0,'CocaCola'); Agrega información (Posición, Lugar donde se quiere hacer la acción, Texto)
    items.splice(item, 1);
    showItems();  
}