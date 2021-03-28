
const inputbutton = document.querySelector('.aboutButton');

function showMe() {
  var maineDiv = document.getElementById('main');
  if(maineDiv.style.display === '' || maineDiv.style.display === 'none'){
    maineDiv.style.display = 'block';
  }
  else {
    maineDiv.style.display = 'none';
  }
}
inputbutton.addEventListener('click', showMe);

const inputMySkills = document.querySelector('.mySkills');

function showMeSkills() {
  var skillsDiv = document.getElementById('skills');
  if(skillsDiv.style.display === '' || skillsDiv.style.display === 'none'){
    skillsDiv.style.display = 'block';
  }
  else {
    skillsDiv.style.display = 'none';
  }
}
inputMySkills.addEventListener('click', showMeSkills);
