function showMenu() {
    const menuContainer = document.getElementById('mobile-menu-container')
    menuContainer.style.display = 'block'
    const menuIcon = document.getElementById('open-menu-icon')
    menuIcon.style.display = 'none'
    const closeIcon = document.getElementById('close-menu-icon')
    closeIcon.style.display = 'block'
  }

  function hideMenu() {
    const menuContainer = document.getElementById('mobile-menu-container')
    menuContainer.style.display = 'none'
    const menuIcon = document.getElementById('open-menu-icon')
    menuIcon.style.display = 'block'
    const closeIcon = document.getElementById('close-menu-icon')
    closeIcon.style.display = 'none'
  }

  function showOrHide() {
    const containerDesc = document.querySelector('.desc-container')
    if(containerDesc.style.display === 'block')
    {containerDesc.style.display = 'none'} else {
      containerDesc.style.display = 'block'
    }
  }
