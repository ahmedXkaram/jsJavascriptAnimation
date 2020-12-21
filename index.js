const durInput = document.querySelector('#input');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');


const timer = new Timer(durInput, startBtn, pauseBtn,{
    OnStart(){
        console.log('This Started from the callback...')
    },
    OnTick(){
        console.log('Tickingdown  from the callback...')
    },
    OnCompelete(){
        console.log('Compeleted from the callback...')
    }
});