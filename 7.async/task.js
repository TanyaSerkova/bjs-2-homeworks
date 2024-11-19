class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback){
        this.time = new Date(time);
        callback()
        if (!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.find(alarm => alarm.time === time) !== undefined){
            console.warn('Уже присутствует звонок на это же время');
        }
        
        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime(time){
        this.time = new Date().toTimeString().slice(0, 5);
        return this.time;
    }

    start(){
        if (this.intervalId){
            return
        }
        this.intervalId = setInterval( () => {
            this.alarmCollection.forEach( alarm => {
              if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();          
              }
            })
          }, 1000);
        }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true)
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}