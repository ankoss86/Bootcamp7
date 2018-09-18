'use strict'
const timer = {
    startTime: null,
    deltaTime: null,
    id: null
  };

function startTimer(){

    let startTime;
    if (timer.deltaTime === null){
        startTime = Date.now();    
    } else{ 
        startTime = Date.now() - timer.deltaTime
    }

    timer.id = setInterval(caunt, 100)
    
    function caunt(){
        
    timer.startTime = Date.now();
    timer.deltaTime = timer.startTime - startTime;
    let minutes = Math.floor(timer.deltaTime/1000/60 % 60)<10 ? `0${Math.floor(timer.deltaTime/1000/60 % 60)}` : Math.floor(timer.deltaTime/1000/60 % 60);
    let seconds = Math.floor(timer.deltaTime/1000 % 60)<10 ? `0${Math.floor(timer.deltaTime/1000 % 60)}` : Math.floor(timer.deltaTime/1000 % 60);
    let miliseconds = Math.floor(timer.deltaTime/100 % 10);

    document.querySelector('.js-time').textContent = `${minutes}:${seconds}:${miliseconds}`;
        
    };  
    
    document.querySelector('.js-start').removeEventListener('click', startTimer);

    function stopTimer(){
        clearInterval(timer.id);
        document.querySelector('.js-start').textContent = 'Continue';
        document.querySelector('.js-start').removeEventListener('click', stopTimer);
        document.querySelector('.js-start').addEventListener('click', startTimer);
    };

    document.querySelector('.js-start').textContent = 'Pause';
    document.querySelector('.js-start').addEventListener('click', stopTimer);

    function reset(){

        stopTimer();
        document.querySelector('.js-start').textContent = 'Start';
        document.querySelector('.js-time').textContent = '00:00.0';
        timer.deltaTime = null;

        if(laps.length>0){

            for(let i = 0; i<laps.length; i++){
                document.querySelector('.lapTime').remove()
            };

            laps = [];

                } else {
                    return
                };
    };

    document.querySelector('.js-reset').addEventListener('click', reset);

};

document.querySelector('.js-start').addEventListener('click', startTimer);

document.querySelector('.js-take-lap').addEventListener('click', takeLap);

let laps =[];

function takeLap(){

   let lapMinutes = Math.floor(timer.deltaTime/1000/60 % 60)<10 ? `0${Math.floor(timer.deltaTime/1000/60 % 60)}` : Math.floor(timer.deltaTime/1000/60 % 60);
   let lapSeconds = Math.floor(timer.deltaTime/1000 % 60)<10 ? `0${Math.floor(timer.deltaTime/1000 % 60)}` : Math.floor(timer.deltaTime/1000 % 60);
   let lapMiliseconds = Math.floor(timer.deltaTime/100 % 10);
   let lap = `${lapMinutes}:${lapSeconds}:${lapMiliseconds}`;
   laps.push(lap);
   let li = document.createElement('li');
   li.classList.add('lapTime');

    for(let i = 0; i<laps.length; i++){               
        li.textContent = `${i+1} lap time = ${laps[i]}`;
        document.querySelector('.js-laps').append(li);
    };
}


