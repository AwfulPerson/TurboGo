// function displayTime() {
// 	var element = document.getElementById("clock"); // Найти элемент с id="clock" 
// 	var now = new Date();	// Получить текущее время
// 	element.innerHTML = now.toLocaleTimeString(); // Отобразить его 
// 	setTimeout(displayTime, 1000);	// Вызвать снова через 1 сек
// }

// window.onload = displayTime; // Начать отображение времени после загрузки документа

let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button")
let timerShow = document.getElementById("timer");

buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60
})

timer = setInterval(function () {
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    hour = timeMinut/60/60%60
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)

