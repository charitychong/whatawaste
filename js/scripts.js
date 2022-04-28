
document.addEventListener('DOMContentLoaded', () => {

  const openBtn1 = document.querySelector('#leftover-soup__btn');
  const closeBtn1 = document.querySelector('.close1');
  const recipe1 = document.querySelector('#soup-instructions');
  


  openBtn1.addEventListener('click', function(){
    var ctr = 1;
    recipe1.className = recipe1.className !== 'show' ? 'show' : 'hide';
    if (recipe1.className === 'show') {
      recipe1.style.display = 'block';
      window.setTimeout(function(){
        recipe1.style.opacity = 1;
        recipe1.style.transform = 'scale(1)';
      },0);
    }
    if (recipe1.className === 'hide') {
      recipe1.style.opacity = 0;
      recipe1.style.transform = 'scale(0)';
      window.setTimeout(function(){
        recipe1.style.display = 'none';
    },700); // timed to match animation-duration
    }

    closeBtn1.addEventListener('click', () => {
      recipe1.style.display = 'none';
      recipe1.classList.remove('show');
      recipe1.classList.add('hide');
    });

  });



  const openBtn2 = document.querySelector('#broccoli__btn');
  const closeBtn2 = document.querySelector('.close2');
  const recipe2 = document.querySelector('#broccoli-instructions');


  openBtn2.addEventListener('click', function(){
    var ctr = 1;
    recipe2.className = recipe2.className !== 'show' ? 'show' : 'hide';
    if (recipe2.className === 'show') {
      recipe2.style.display = 'block';
      window.setTimeout(function(){
        recipe2.style.opacity = 1;
        recipe2.style.transform = 'scale(1)';
      },0);
    }
    if (recipe2.className === 'hide') {
      recipe2.style.opacity = 0;
      recipe2.style.transform = 'scale(0)';
      window.setTimeout(function(){
        recipe2.style.display = 'none';
    },700); // timed to match animation-duration
    }

    closeBtn2.addEventListener('click', () => {
      recipe2.style.display = 'none';
    });

  });
  
});









