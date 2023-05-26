const nextClass = Date.parse('May 26, 2023 19:57:00');

const clase = setInterval(function() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const thisMoment = new Date().getTime();
  const timeLeft = nextClass - thisMoment;

  // Per ottimizzare un po' il codice e non perdersi in esso, utilizzare l'operatore resto (%)
  // In questo modo trasformo solo ciò che avanza da giorni in ore, ciò che avanza da ore in minuti e ciò che avanza da minuti in secondi.
  //Pertanto, il risultato stampato è in realtà una trasformazione del resto che utilizza le costanti definite sopra.
  document.getElementById("days").innerText = Math.floor(timeLeft / (day)),
  document.getElementById("hours").innerText = Math.floor((timeLeft % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((timeLeft % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((timeLeft % (minute)) / (second));

  // Una volta arrivato al tempo definito nella variabile nextClass, estraggo il timer e mostro il messaggio nascosto e le icone.
  if (timeLeft < 0) {
    document.getElementById("headline").innerText = "It's coding time";
    document.getElementById("countdown").classList.add('hidden');
    document.getElementById("content").classList.remove('hidden');
    clearInterval(clase);
  }
  
  }, 1000);