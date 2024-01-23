var questionElements = document.querySelectorAll('.duvida');

questionElements.forEach((question) =>{
  question.addEventListener('click', ()=>{
    var change = question.querySelector('p');
    change.classList.toggle('closeDuvida');
  });
});