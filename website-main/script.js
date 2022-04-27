function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function createBurst(){
  let animContainer = document.querySelector('.animation-container');
  let burst = document.querySelector('.burst');

  burst.style.top = Math.random() * 550 + 'px';
  burst.style.left = Math.random() * 750 + 'px';

  let burstClone = burst.cloneNode(true);
  animContainer.appendChild(burstClone);

  setTimeout(() => {
    burstClone.remove();
  }, 20000);
}
setInterval(createBurst, 2000);