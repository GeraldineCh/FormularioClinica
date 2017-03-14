var registro = [];

var nombre = document.getElementById('name').value;
var apellido = document.getElementById('ap').value;
var edad = document.getElementById('age').value;
var genero = document.getElementById('gen').value;
var cuidad = document.getElementById('cuidad').value;
var pais = document.getElementById('pais').value;
var boton = document.getElementById('registro');

function Ingreso(nombre,apellido,edad,genero,cuidad,pais){
  this.nombre = nombre; 
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.cuidad = cuidad;
  this.pais = pais;
  this.mostrar = function (){ 
    var informacion = ("<br><br>Nombre: "+this.nombre+this.apellido+
    		"%<br>Edad: "+this.edad+"</br>País: "+this.pais);
    return informacion;
  };
}

boton.addEventListener("click",function(e){
  e.preventDefault();
    var individuo = new Ingreso(nombre,apellido,edad,genero,cuidad,pais);
    document.getElementById("salida").innerHTML = individuo.mostrar();
  });


