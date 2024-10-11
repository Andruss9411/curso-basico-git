var items = localStorage.getItem('itemList');
items = items ? JSON.parse(items) :  [] ;
showItems();

function addItem(){
    let item = document.getElementById("product-name").value;
    let desc = document.getElementById("product-desc").value;
    let value = document.getElementById("product-value").value;

    if(item && desc && value){
        items.push({"nombre": item,"descripcion": desc,"precio": value});
        localStorage.setItem('itemList',JSON.stringify(items));
        showItems();
    }
    else{
        alert("Complete los campos");
    }        
}

function showItems(){    
    document.getElementById("product-name").value = '';
    document.getElementById("product-desc").value = '';
    document.getElementById("product-value").value = '';

    let html = "";
    items.forEach((item,i) => {
        html += `<div class='col-3 m-1'>${item.nombre}</div>`; 
        html += `<div class='col-3 m-1'>${item.descripcion}</div>`; 
        html += `<div class='col-3 m-1'>${item.precio}</div>`; 
        html += `<div class= 'col-1 m-1'> <input type='button' class='btn btn-danger' onclick='deleteItem(${i})' value='X'> </div>`;
    });  
    document.getElementById('item-list').innerHTML = html;
}

function deleteItem(item){        
    items.splice(item, 1);
    showItems();  
}