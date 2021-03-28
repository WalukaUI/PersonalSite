
const input = document.querySelector('#main');
const inputbut = document.querySelector('#aboutButton');


function showMe() {
  var maineDiv = document.getElementById('main');
 
  if(maineDiv.style.display == '' || maineDiv.style.display == 'none'){
    maineDiv.style.display = 'block';
  }
  else {
    maineDiv.style.display = 'none';
  }
}

inputbut.addEventListener('click', showMe);

