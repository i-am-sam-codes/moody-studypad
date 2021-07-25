//create a class for clock passing through an element parameter 
class MyClock {
    constructor(element) {
        this.element = element;
    }
//method to run automaticlly and works as time progressess
    start() {
        this.update();//automatically start time instead of waiting 


        setInterval(() => {
            this.update();
        }, 500); // every 500millsec

    }
//time filler & grab time parts
    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0"); //formatted minutes to insert 0 when needed value = (2) total characters fill with "0"
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector('.clock-time').textContent = timeFormatted;
        this.element.querySelector('.clock-timeampm').textContent = amPm;
    }
//give/return current time info
    getTimeParts() {
        const now = new Date();

//24hr time with "%"
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        }
    }
}
//select the element of class of '.clock'
const clockElement = document.querySelector('.clock');
const clockObject = new MyClock(clockElement);

//kick start the clock
clockObject.start();

