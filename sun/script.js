const mySlides = document.querySelector('.mySlides');
const slidesImg = document.querySelectorAll('.mySlides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = slidesImg[0].clientWidth;
mySlides.style.transform = 'translateX('+(-size * counter) + 'px)';

nextBtn.addEventListener('click',()=> {
  if (counter >= slidesImg.length -1) return;
  mySlides.style.transform = 'transform 0.4s ease-in-out';
  counter++;
  mySlides.style.transform = 'translateX('+(-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=> {
  if (counter <= 0) return;
  mySlides.style.transform = 'transform 0.4s ease-in-out';
  counter--;
  mySlides.style.transform = 'translateX('+(-size * counter) + 'px)';
});

mySlides.addEventListener('transitionend',()=> {
  if (slidesImg[counter].id ==='lastClown'){
    mySlides.style.transition = 'none';
    counter = mySlides.length -2;
    mySlides.style.transform =  'translateX('+(-size * counter) +'px)';
  }
});


mySlides.addEventListener('transitionend',()=> {
  if (slidesImg[counter].id ==='firstClown'){
    mySlides.style.transition = 'none';
    counter = mySlides.length - counter;
    mySlides.style.transform =  'translateX('+(-size * counter) +'px)';
  }
});

const timeEl = document.querySelector('.watch .time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 90;
let interval = null;

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);
function timer(){
  seconds--;
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  
  if (sec < 10) sec = '0' + sec;
  if (min < 10) min = '0' + min;
  timeEl.innerHTML=`${min}:${sec}`;
  if (seconds === 0){
    clearInterval(interval);
    timeEl.innerHTML='done';
  }
}

function start(){
  if (interval){
    return
  }
  interval = setInterval(timer, 1000);
}

function stop(){
  clearInterval(interval);
  interval = null
}
function reset(){
  stop();
  seconds = 90;
  timeEl.innerHTML='1:30';
}

let reLoud = document.getElementById('carousel__button--prev');
let reloud2 = document.getElementById('carousel__button--next');
reLoud.addEventListener('click',
function reLoud(){
  stop();
  seconds = 90;
  timeEl.innerHTML='1:30';
});

reloud2.addEventListener('click',
function reloud2(){
  stop();
  seconds = 90;
  timeEl.innerHTML='1:30';
});
