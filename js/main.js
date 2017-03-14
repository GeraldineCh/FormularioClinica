var registro = [];

var nombre = document.getElementById('name');
var apellido = document.getElementById('ap');
var edad = document.getElementById('age');
var genero = document.getElementById('gen');
var cuidad = document.getElementById('cuidad');
var pais = document.getElementById('pais');
var boton = document.getElementById('registro');

function Ingreso(nombre,apellido,edad,genero,cuidad,pais){
  this.nombre = nombre; 
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.cuidad = cuidad;
  this.pais = pais;
  this.mostrar = function (){ 
    var informacion = ("<br><br>Nombre: "+this.nombre+" "+this.apellido+
        "<br>Edad: "+this.edad+"</br>País: "+this.pais);
    return informacion;
  };
}

boton.addEventListener("click",function(e){
  e.preventDefault();
    var individuo = new Ingreso(nombre.value,apellido.value,edad.value,genero.value,cuidad.value,pais.value);
    registro.push(individuo);
    document.getElementById("salida").innerHTML += individuo.mostrar();
    document.getElementById("datos").reset();
  });