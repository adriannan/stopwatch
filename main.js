// alert('ok')

const timer = document.querySelector('#timer')
const btnMain = document.querySelector('.main')
const btnReset = document.querySelector('.reset')
let start = 0;
let isActive = false;
let interval;

const startTimer = () => {
    isActive = !isActive;
    if(isActive){
        interval = setInterval(() => {
            start += 0.01
            let time = (Math.round(start * 100) / 100).toFixed(2)
            timer.textContent = time;
            if(time<10){
                timer.textContent = `0${time}`
            }
        }, 10);
        btnMain.textContent = 'Pause';
    } else {
        btnMain.textContent = 'Start';
        clearInterval(interval)
    }

}





btnMain.addEventListener('click', startTimer)
btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    btnMain.textContent = 'Start';
    start = 0;
    timer.textContent = '00.00';
})
