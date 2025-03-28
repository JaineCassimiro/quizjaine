const checkbox = document.getElementById('reg-log');
const cardWrapper = document.querySelector('.card-3d-wrapper');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    cardWrapper.style.transform = 'rotateY(180deg)';
  } else {
    cardWrapper.style.transform = 'rotateY(0deg)';
  }
});
const menuToggle = document.getElementById('click');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    navList.style.left = '0';
  } else {
    navList.style.left = '-100%';
  }
});
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', e => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});
console.log('%cOlá, senhorita Jaine! 👋\nSeu código está mais lindo que Aurora Boreal em linha de comando.', 
  'color: #E91E63; font-weight: bold; font-size: 16px; font-family: Lato;');