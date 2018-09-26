'use strick'

document.querySelector('.start').addEventListener('click', startGame);
let allDiv = document.querySelectorAll('.card');
allDiv.forEach(el => el.addEventListener('click', flipCards))

function startGame(){
  document.querySelector('.start').classList.add('hiden_start');
  document.querySelector('.game').style.display = 'flex';
  allDiv.forEach(el => el.style.order = (Math.floor(Math.random()*28)));
  document.querySelector('.track').play(); 
};

let fst;
let scd;

function flipCards(){
    document.querySelector('.flipSound').currentTime = 0;  
    document.querySelector('.flipSound').play();
    fst = this;
    fst.classList.add('flip');
    // console.log(fst);
    allDiv.forEach(el => el.removeEventListener('click', flipCards));
    allDiv.forEach(el => el.addEventListener('click', flip));
}
    function flip(){
        document.querySelector('.flipSound').currentTime = 0;  
        document.querySelector('.flipSound').play();
        scd = this;
        scd.classList.add('flip');
        console.log(scd);
        allDiv.forEach(el => el.removeEventListener('click', flip));
        allDiv.forEach(el => el.addEventListener('click', flipCards));
        
          if(fst.dataset.name === scd.dataset.name){
              setTimeout(opacity, 500);
            } else {
              setTimeout(unFflip, 500);             
            }
            let allOpacity = document.querySelectorAll('.flip');
              if (allOpacity.length === 24){
                setTimeout(win, 1000);
              };
    };

  function unFflip(){
    scd.classList.remove('flip');
    fst.classList.remove('flip');
  };

  function opacity(){
    fst.style.opacity = '0';      
    scd.style.opacity = '0';
    document.querySelector('.correct').currentTime = 0;  
    document.querySelector('.correct').play();
  };

  function win(){
    confirm('you win!!!!\nplay again???');
    if (confirm){
        location.reload();
      } else {
        alert('fuck you!!!')
      };
  };
