const tabControls = document.querySelectorAll('.js-tab-control');
const tabContents = document.querySelectorAll('.js-tab-content');


tabControls.forEach((elem, index) => {
  elem.addEventListener('click', (e) => tabClickHandler(e, elem));
});
function tabClickHandler(event, elem) {
  const { hash } = event.srcElement;
  const targetId = hash.replace('#', '');
  const content = document.getElementById(targetId);

  
 if (content.classList.contains('show')) return;
  
  tabControls.forEach(el => el.classList.remove('active'));
  tabContents.forEach(el => el.classList.remove('show'));
  
  elem.classList.add('active');
  content.classList.add('show');
}