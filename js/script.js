(function () {
  var menu = document.getElementById('menu-inteiro'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){
             menu.classList.add('menuFixo');
        }     
        else {menu.classList.remove('menuFixo');
    }
  });
})();

var inicio2 = document.getElementById("inicio");
var series2 = document.getElementById("series");
var filmes2 = document.getElementById("filmes");

var tituloPrinc = document.getElementById("titulo-Principal");
var tituloSeries = document.getElementById("titulo-Series");
var tituloFilmes = document.getElementById("titulo-Filmes");

var carouselFilmes = document.getElementById("carousel-filmes")
var carouselSeries = document.getElementById("carousel-series")


var backg = document.getElementById("background-image")
var imagemSeriesUrl= "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url('./img/series.png')";
var imagemFilmesUrl= "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url('./img/filmes.jpg')";
var imagemInicioUrl= "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url('./img/filme-principal.png')";

inicio2.onclick = function () {
  carouselSeries.style.display = "block";
  carouselFilmes.style.display = "block";
  backg.style.background= imagemInicioUrl;
  backg.style.backgroundSize= "cover";
  tituloPrinc.style.display = "block";
  tituloSeries.style.display = "none";
  tituloFilmes.style.display = "none";
}

series2.onclick = function () {
  carouselSeries.style.display = "block";
  carouselFilmes.style.display = "none";
  backg.style.background= imagemSeriesUrl;
  backg.style.backgroundSize= "cover";
  tituloPrinc.style.display = "none";
  tituloSeries.style.display = "block";
  tituloFilmes.style.display = "none";
}

filmes2.onclick = function () {
  carouselSeries.style.display = "none";
  carouselFilmes.style.display = "block";
  backg.style.background= imagemFilmesUrl;
  backg.style.backgroundSize= "cover";
  tituloPrinc.style.display = "none";
  tituloSeries.style.display = "none";
  tituloFilmes.style.display = "block";
}
