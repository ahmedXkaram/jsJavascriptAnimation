class Timer { 

    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton   = startButton;
        this.pauseButton   = pauseButton;
        
        if(callbacks){
            this.OnStart = callbacks.OnStart;
            this.OnTick = callbacks.OnTick;
            this.OnCompelete = callbacks.OnCompelete;
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    start = () => {
        if(this.OnStart){
            this.OnStart();
        }
        this.interval = setInterval(this.tick, 1000); 
    }

    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause();
            if(this.OnCompelete){
                this.OnCompelete();
            }
        } else{
            this.timeRemaining = this.timeRemaining - 1; 

            if(this.OnTick){
                this.OnTick();
            }
        }
    }

    pause = () => {
        clearInterval(this.interval);
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time;
    }
}
