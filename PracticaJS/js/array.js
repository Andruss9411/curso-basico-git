var items = localStorage.getItem('itemList');
//Condicional Ternario
items = items ? items.split(',') :  [] ;

function addItem(){
    let item = document.getElementById("product-name").value;
    if(item){items.push(item);}
    console.log(items);
    localStorage.setItem('itemList',items)
}