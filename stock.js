const productos = [
    {
        id:1,
        nombre:"Crema post-tatto",
        precio:10,
        img: "../multimedia/imagenes/crema.jpeg",
        cantidad:20
    },
    {
        id:2,
        nombre:"Jabón anti-bacterial",
        precio:20,
        img:'../multimedia/imagenes/jabon.jpeg',
        cantidad:30
    },

    {
        id:3,
        nombre:"Jabón limpiador",
        precio:100,
        img:'../multimedia/imagenes/limpiador.jpeg',
        cantidad:50
    }
]
localStorage.setItem("objeto", JSON.stringify(productos));
let objetoProducto = JSON.parse(localStorage.getItem(productos))
console.log (objetoProducto);

let usuario;
let usuarioStorage = sessionStorage.getItem ("usuario");  

if (usuarioStorage){
    alert (`Bienvenido ${usuarioStorage}`);
}else{
    usuario = prompt("Ingrese su nombre");
    sessionStorage.setItem("usuario", usuario);
    alert ("Bienvenid@ a Fructuoso Tattoo");
}
