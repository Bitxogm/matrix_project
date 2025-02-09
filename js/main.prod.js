var _this = this;
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }
// Creamos una constante para almacenar el canvas y tener donde pintar y obtener el width y height del documnet para que se vaya adaptando automaticamente  a la pantalla que lo esta viendo:
var element = document.querySelector('#canvas');

// Necesitamos un pincel paara ir pintando en el canvas lo obtenemos gracias a la API Canvas , creamos constante que por lo general se llama ctx (context) y creamos un element que es el objeto que existe dentro de los navegadores y le damos un getContext
var CTX = element.getContext('2d');

// Con esto adaptamos el documento conforme a la ventana que visualizamos:
var W = document.body.clientWidth;
var H = document.body.clientHeight;
element.width = W;
element.height = H;

// Creamos una posicion para ir colocando o dando los espacios para que se vayan posicionado las letras en nuestro matrix: 
// 1-Creamos una constante , que va a ser un array con 300 elementos y estos arrays se van a ir uniendo  con .join desde las posiciones 0
var POSITION = Array(300).join(0).split('');

// Creamos otra constante que va a hacer toda la logica de la matrix , y para ir pintando el lienzo/canvas lo vamos a pintar como un metodo y el metodo o la funcion lo que va hacer es ir tomando esa logica y la va a ir repitiendo de maneras aleatorias para ir rellenando el lienzo :
var INITMATRIX = function INITMATRIX() {
  var _this2 = this;
  _newArrowCheck(this, _this);
  // ahora para apuntar al canvas usamos CTX.fillStyle , para ir dando estilo al documento:
  CTX.fillStyle = 'rgba(0, 10, 2, 0.15)';
  CTX.fillRect(0, 0, W, H);
  CTX.fillStyle = 'violet';
  CTX.font = '11pt';
  POSITION.map(function (y, index) {
    _newArrowCheck(this, _this2);
    var LETRA = String.fromCharCode(1e2 + 1e5 * Math.random() * 30);
    var X = index * 15;
    canvas.getContext('2d').fillText(LETRA, X, y);
    y > 100 + Math.random() * 1e5 ? POSITION[index] = 0 : POSITION[index] = y + 15;
    
  }.bind(this));
  
}.bind(this);

setInterval(INITMATRIX, 60);
INITMATRIX();
