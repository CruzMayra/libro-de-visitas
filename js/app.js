var previewText = document.getElementById('comment-text');
var newComment = document.getElementById('new-comment');
var largeTextButton = document.getElementsByClassName('comment-large')[0];
var mediumTextButton = document.getElementsByClassName('comment-medium')[0];
var smallTextButton = document.getElementsByClassName('comment-small')[0];

newComment.addEventListener('keyup', previewTextComment);
largeTextButton.addEventListener('click', textLargeFormat);
mediumTextButton.addEventListener('click', textMediumFormat);
smallTextButton.addEventListener('click', textSmallFormat);

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
