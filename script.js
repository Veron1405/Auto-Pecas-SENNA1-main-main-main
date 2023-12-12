const countDownDate = new Date("2023-12-14T23:59:59").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
 
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

  const progress = 100 - ((distance / (1000 * 60 * 60 * 24 * 365)) * 100); 
  document.getElementById("progress").style.width = progress + "%";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRADO";
  }
}, 1000); 