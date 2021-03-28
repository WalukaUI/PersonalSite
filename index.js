
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


const inputMySites = document.querySelector('.toMySites');
function showMeSites() {
  var mySitesDiv = document.getElementById('mySites');
  if(mySitesDiv.style.display === '' || mySitesDiv.style.display === 'none'){
    mySitesDiv.style.display = 'block';
  }
  else {
    mySitesDiv.style.display = 'none';
  }
}
inputMySites.addEventListener('click', showMeSites);

const inputContactMe = document.querySelector('.contactMeBtn');
function showMyContacts() {
  var myContactDtls = document.getElementById('contactMe');
  if(myContactDtls.style.display === '' || myContactDtls.style.display === 'none'){
    myContactDtls.style.display = 'block';
  }
  else {
    myContactDtls.style.display = 'none';
  }
}
inputContactMe.addEventListener('click', showMyContacts);