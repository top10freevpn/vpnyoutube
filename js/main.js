
function toggleNavigationMenu(e) {
  let nav = e.target.closest('.header__navigation-open')
  let opened = 'header__navigation-open--opened'

  if(nav.classList.contains(opened))
    nav.classList.remove(opened)
  else
    nav.classList.add(opened)

};

function toggleMobileNavigationMenu(e) {
  let headerMobile = document.getElementsByClassName('header__mobile-menu')[0]
  let opened = 'header__mobile-menu--opened'

  if(headerMobile.classList.contains(opened))
    headerMobile.classList.remove(opened)
  else
    headerMobile.classList.add(opened)

}
