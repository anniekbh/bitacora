window.addEventListener("load", function(){
  var texto = document.getElementById("crearTxt");
  var imagen = document.getElementById("crearImg");
  var cita = document.getElementById("crearCita");
  var nota = document.getElementById("crearNota");
  var receptor = document.getElementById("receptor");

  texto.addEventListener("click", crearTexto);
  imagen.addEventListener("click", crearImagen);
  cita.addEventListener("click", crearCita);
  nota.addEventListener("click", crearNota);

});

function crearTexto(){
    titulos = document.createElement("input");
    areaTexto = document.createElement("textarea");
    imagenPost = document.createElement("input");
    botonPost = document.createElement("input");
    botonCerrar = document.createElement("input");
    element = document.createElement("div");
    botonColor = document.createElement("input");

    element.setAttribute("class", "post");
    botonColor.setAttribute("type", "color");
    botonPost.setAttribute("type", "submit");
    botonPost.setAttribute("value", "Post");
    botonCerrar.setAttribute("type", "submit");
    botonCerrar.setAttribute("value", "Cerrar");

    areaTexto.placeholder = "Texto...";
    titulos.placeholder = "Título...";
    imagenPost.placeholder = "URL...";
    imagenPost.style.display = "none";
    botonColor.style.display = "none";

    element.insertBefore(titulos,element.childNodes[0]);
    element.insertBefore(botonColor,element.childNodes[1]);
    element.insertBefore(areaTexto,element.childNodes[2]);
    element.insertBefore(imagenPost,element.childNodes[3]);
    element.insertBefore(botonCerrar,element.childNodes[4]);
    element.insertBefore(botonPost,element.childNodes[5]);
    receptor.insertBefore(element,receptor.childNodes[0]);

    botonCerrar.addEventListener("click", function(){
      this.parentElement.remove();
    });
    botonPost.addEventListener("click",function(){
      post(areaTexto, titulos);
      areaTexto.value = "";
      titulos.value = "";
      botonColor.value = "";
      this.parentElement.remove();
    });
}

function post(){
    var publicacion = document.createElement("div");
    var crearTitulo = document.createElement("h2");
    var crearImg = document.createElement("img");
    var crearTexto = document.createElement("p");
    var hora = document.createElement("span");

    publicacion.setAttribute("class", "post");
    
    publicacion.insertBefore(hora,publicacion.childNodes[0]);
    publicacion.insertBefore(crearImg,publicacion.childNodes[1]);
    publicacion.insertBefore(crearTitulo,publicacion.childNodes[2]);
    publicacion.insertBefore(crearTexto,publicacion.childNodes[3]);
    receptor.insertBefore(publicacion,receptor.childNodes[0]);

    /*publicacion.style.backgroundColor = botonColor.value;
    crearImg.innerText = imagenPost.value;*/
    crearTitulo.innerText = titulos.value;
    crearTexto.innerText = areaTexto.value;
    hora.innerText = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
}

function crearImagen() {
  crearTexto.call(this);

  imagenPost.style.display = "inline-block";
  areaTexto.style.display = "none";
  titulos.style.display = "none";
  botonColor.style.display = "none";

}
function crearCita() {
  crearTexto.call(this);
  
  titulos.placeholder = "Autor..."
  areaTexto.placeholder = "Cita..."

}
function crearNota() {
  crearTexto.call(this);

  titulos.style.display = "none";
  botonColor.style.display = "block";

  areaTexto.placeholder = "Nota personal...";
}