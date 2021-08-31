const formBtn = document.querySelector('.form-btn');
const loaderBody = document.querySelector('.spin-wrapper');
const loader = document.querySelector('.spinner');
const thx = document.querySelector('.thx');

// console.log(formBtn);

formBtn.addEventListener('click', function(){
  loaderBody.classList.add('opened');
  setTimeout(function(){
    loaderBody.classList.remove('opened');
    thx.classList.add('opened');
    setTimeout(function(){
    thx.classList.remove('opened');
  }, 1000);
  }, 2000);
})