'use strick'

// let deadLine = Date.now()+180000;
// function count (){
  
//     let timer = deadLine - Date.now();
//     let second = Math.floor(timer/1000%60);    
//     let minutes = Math.floor(timer/1000/60%60);
//     minutes<10 ? document.querySelector('.minutes').textContent = `0${minutes}:`
//     : document.querySelector('.minutes').textContent = minutes;
//     document.querySelector('.seconds').textContent = second<10 ? `0${second}`: second;
// };





let allDiv = document.querySelectorAll('.card');
allDiv.forEach(el => el.addEventListener('click', flipCards));

let width;
let levSelected;
document.querySelector('.select').addEventListener('change', selectLevel);
function selectLevel(){
  levSelected = document.querySelector('.select').value;
  console.log(levSelected);
  
if (levSelected === 'hard'){
  document.querySelector('.deadLine').style.width = '240px'
  width = 240;
} else  if (levSelected === 'medium'){
  document.querySelector('.deadLine').style.width = '480px'
  width = 480;
          
} else {
  document.querySelector('.deadLine').style.width = '720px'
  width = 720;
  console.log(width);
}
document.querySelector('.start').addEventListener('click', startGame);
}

function startGame(){
  console.log(width);
  document.querySelector('.level').style.display = 'none';
  // setInterval(count, 1000)
  document.querySelector('.deadLine').style.display = 'block'
  timerId = setInterval(deadLin, 250);
  document.querySelector('.start').classList.add('hiden_start');
  document.querySelector('.game').style.display = 'flex';
  allDiv.forEach(el => el.style.order = (Math.floor(Math.random()*28)));
  document.querySelector('.track').play(); 
};

// console.log(width);
// width = 720;
let line = document.querySelector('.deadLine'); 
let timerId;
function deadLin(){
    width -=1;
    document.querySelector('.deadLine').style.width = `${width}px`;
    if(document.querySelector('.deadLine').style.width === '0px'){
      alert('you loose');
      clearInterval(timerId);
      location.reload();
    }
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
        
          if(fst.dataset.name === scd.dataset.name&&fst !== scd){
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
