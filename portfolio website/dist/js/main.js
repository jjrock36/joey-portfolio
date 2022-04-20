const navBtn = document.querySelector('.nav_btn');
const closeBtn = document.querySelector('.close_btn');
const modal = document.querySelector('.modal');
const links = document.querySelectorAll('.link');

navBtn.addEventListener('click', () => {
  modal.classList.add('show_modal');
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show_modal');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.remove('show_modal');
  });
});
