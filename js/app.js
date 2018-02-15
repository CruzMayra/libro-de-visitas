//variables que hacen referencia, mediante DOM,  a elementos del html
var previewText = document.getElementById('comment-text');
var newComment = document.getElementById('new-comment');
var largeTextButton = document.getElementsByClassName('comment-large')[0];
var mediumTextButton = document.getElementsByClassName('comment-medium')[0];
var smallTextButton = document.getElementsByClassName('comment-small')[0];
var textColorButton = document.getElementsByClassName('comment-color')[0];
var backgroundButton = document.getElementsByClassName('comment-background')[0];
var alignTextLeft = document.getElementsByClassName('comment-left')[0];
var alignTextCenter = document.getElementsByClassName('comment-center')[0];
var alignTextRight = document.getElementsByClassName('comment-right')[0];

//eventos
newComment.addEventListener('keyup', previewTextComment);
largeTextButton.addEventListener('click', textLargeFormat);
mediumTextButton.addEventListener('click', textMediumFormat);
smallTextButton.addEventListener('click', textSmallFormat);
textColorButton.addEventListener('click', colorTextFormat);
backgroundButton.addEventListener('click', backgroundTextFormat);
alignTextLeft.addEventListener('click', alignedTextLeft);
alignTextCenter.addEventListener('click', alignedTextCenter);
alignTextRight.addEventListener('click', alignedTextRight);

//función que pre visualiza el texto del comentario
function previewTextComment(){
  var textComment = newComment.value;
  previewText.textContent = textComment;
}

//función que cambia el tamaño (lg) del texto del comentario
function textLargeFormat() {
  previewText.classList.remove('h3');
  previewText.classList.remove('h5');
  previewText.classList.add('h1');
}

//función que cambia el tamaño (m) del texto del comentario
function textMediumFormat() {
  previewText.classList.remove('h1');
  previewText.classList.remove('h5');
  previewText.classList.add('h3');
}

//función que cambia el tamaño (s) del texto del comentario
function textSmallFormat() {
  previewText.classList.remove('h1');
  previewText.classList.remove('h3');
  previewText.classList.add('h5');
}

//función que cambia el color del texto del comentario
function colorTextFormat() {
  var colorText = prompt('Por favor indica, en formato hexadecimal, el color de tu comentario:');
  previewText.style.color = colorText;
}

//función que cambia el color de fondo del texto del comentario
function backgroundTextFormat(){
  var backgroundText = prompt('Por favor indica, en formato hexadecimal, el color de fondo de tu comentario:')
  previewText.style.background = backgroundText;
}

//función que alinea el texto del comentario
function alignedTextLeft(){
  previewText.classList.remove('text-center');
  previewText.classList.remove('text-right');
  previewText.classList.add('text-left');
}

//función que alinea el texto del comentario
function alignedTextCenter() {
  previewText.classList.remove('text-left');
  previewText.classList.remove('text-right');
  previewText.classList.add('text-center');
}

//función que alinea el texto del comentario
function alignedTextRight() {
  previewText.classList.remove('text-center');
  previewText.classList.remove('text-left');
  previewText.classList.add('text-right');
}
