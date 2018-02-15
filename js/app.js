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

newComment.addEventListener('keyup', previewTextComment);
largeTextButton.addEventListener('click', textLargeFormat);
mediumTextButton.addEventListener('click', textMediumFormat);
smallTextButton.addEventListener('click', textSmallFormat);
textColorButton.addEventListener('click', colorTextFormat);
backgroundButton.addEventListener('click', backgroundTextFormat);
alignTextLeft.addEventListener('click', alignedTextLeft);
alignTextCenter.addEventListener('click', alignedTextCenter);
alignTextRight.addEventListener('click', alignedTextRight);

function previewTextComment(){
  var textComment = newComment.value;
  previewText.textContent = textComment;
}

function textLargeFormat() {
  previewText.classList.remove('h3');
  previewText.classList.remove('h5');
  previewText.classList.add('h1');
}

function textMediumFormat() {
  previewText.classList.remove('h1');
  previewText.classList.remove('h5');
  previewText.classList.add('h3');
}

function textSmallFormat() {
  previewText.classList.remove('h1');
  previewText.classList.remove('h3');
  previewText.classList.add('h5');
}

function colorTextFormat() {
  var colorText = prompt('Por favor indica, en formato hexadecimal, el color de tu comentario:');
  previewText.style.color = colorText;
}

function backgroundTextFormat(){
  var backgroundText = prompt('Por favor indica, en formato hexadecimal, el color de fondo de tu comentario:')
  previewText.style.background = backgroundText;
}

function alignedTextLeft(){
  previewText.classList.remove('text-center');
  previewText.classList.remove('text-right');
  previewText.classList.add('text-left');
}

function alignedTextCenter() {
  previewText.classList.remove('text-left');
  previewText.classList.remove('text-right');
  previewText.classList.add('text-center');
}

function alignedTextRight() {
  previewText.classList.remove('text-center');
  previewText.classList.remove('text-left');
  previewText.classList.add('text-right');
}
