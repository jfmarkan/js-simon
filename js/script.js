const nextClass = Date.parse('May 26, 2023 09:30:00');
const countDown = new Date(nextClass).getTime()
const clase = setInterval(function() {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24
        const thisMoment = new Date().getTime()
        const timeLeft = countDown - thisMoment;

        document.getElementById("days").innerText = Math.floor(timeLeft / (day)),
        document.getElementById("hours").innerText = Math.floor((timeLeft % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((timeLeft % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((timeLeft % (minute)) / second);

        if (timeLeft < 0) {
            document.getElementById("headline").innerText = "It's coding time";
            document.getElementById("countdown").classList.add('hidden');
            document.getElementById("content").classList.remove('hidden');
            clearInterval(clase);
          }
          //seconds
        }, 0);