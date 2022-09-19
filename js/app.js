// store all sections in list
const sections = [];
document.querySelectorAll('section').forEach((elm) => {
  sections.push(elm);
});
// build the nav
const navbarList = document.getElementById('navbar__list');
sections.forEach((elm) => {
  const li = document.createElement('li');
  li.innerHTML = `<a href = "#${elm.id}" class = "menu__link">${elm.dataset.nav}</a>`;
  navbarList.appendChild(li);
});
// Add class 'active' to section when near top of viewport
window.onscroll = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    let link = document.querySelector(`a[href="#${sec.id}"]`);
    if (rect.top >= -400 && rect.top <= 220) {
      sec.classList.add('your-active-class');
      link.classList.add('active_link');
    } else {
      sec.classList.remove('your-active-class');
      link.classList.remove('active_link');
    }
  });
};
// Add scroll to top
