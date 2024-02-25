const dropdownItems = document.querySelectorAll('.dropdown')

dropdownItems.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()

    const wrapper = btn.querySelector('.dropdown__list-wrapper')

    const isActive = btn.classList.toggle('active')

    wrapper.style.maxHeight = isActive ? wrapper.scrollHeight + 'px' : null
  })
})
