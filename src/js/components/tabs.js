const tabsBtn = document.querySelectorAll('.collection__btn')
const tabsContent = document.querySelectorAll('.collection__items')

tabsBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    const dataset = btn.dataset.collectionBtn
    const content = document.querySelector(`.collection__items[data-collection-content="${dataset}"]`)

    tabsContent.forEach(el => {
      el.classList.remove('active')
    })
    tabsBtn.forEach(el => {
      el.classList.remove('active')
    })
    btn.classList.add('active')
    content.classList.add('active')
  })
})
