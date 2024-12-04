//Donde quiero renderizar
const app = document.querySelector("#app");
console.log("app",app);

//Qué quiero renderizar
const h1 =  document.createElement("h1");
h1.textContent = "Hola mundo";
console.log("h1",h1);

//Renderizar
app.appendChild(h1);