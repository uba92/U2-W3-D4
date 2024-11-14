const PEXEL_URL = 'https://api.pexels.com/v1/search?query=galaxy'

const API_KEY = 'ayRAraaqUW3F0iycASQJRiZMaiKrsWL1Mzv1Xt4l31xsB0ipFkx1xFsp'

// const addressBarContent = new URLSearchParams(window.location.search)

// const myQuery = addressBarContent.get('query')

const loadBtn = document.getElementById('load-btn')

loadBtn.addEventListener('click', function () {
  fetch(PEXEL_URL, {
    method: 'GET',
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nella richiesta!')
      }
    })
    .then((data) => {
      console.log(data)
      let images = document.getElementsByClassName('card-img-top')

      const arrImg = Array.from(images)
      for (let i = 0; i < arrImg.length; i++) {
        arrImg[i].setAttribute('src', `${data.photos[i].src.medium}`)
      }
      let textMuted = document.querySelectorAll('small.text-muted')
      const arrMuted = Array.from(textMuted)
      console.log(arrMuted)
      for (let i = 0; i < arrMuted.length; i++) {
        arrMuted[i].innerText = `${data.photos[i].id}`
      }

      const cards = document.querySelectorAll('.card')
      const arrOfCards = Array.from(cards)
      for (let i = 0; i < arrOfCards.length; i++) {
        arrOfCards[i].classList.remove('d-none')
      }
    })
    .catch((error) => {
      console.log('error', error)
    })
})

const NEW_PEXEL_URL = 'https://api.pexels.com/v1/search?query=mountains'
const loadBtnSecond = document.getElementById('load-secondary-btn')

loadBtnSecond.addEventListener('click', function () {
  fetch(NEW_PEXEL_URL, {
    method: 'GET',
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nella richiesta!')
      }
    })
    .then((data) => {
      console.log(data)
      let images = document.getElementsByClassName('card-img-top')

      const arrImg = Array.from(images)
      for (let i = 0; i < arrImg.length; i++) {
        arrImg[i].setAttribute('src', `${data.photos[i].src.medium}`)
      }
      let textMuted = document.querySelectorAll('small.text-muted')
      const arrMuted = Array.from(textMuted)
      console.log(arrMuted)
      for (let i = 0; i < arrMuted.length; i++) {
        arrMuted[i].innerText = `${data.photos[i].id}`
      }
    })
    .catch((error) => {
      console.log('error', error)
    })
})

const editButton = document.querySelectorAll('.btn-group button:nth-of-type(2)')
for (let i = 0; i < editButton.length; i++) {
  editButton[i].innerText = 'Hide'
  editButton[i].addEventListener('click', function () {
    const cards = document.querySelectorAll('.card')
    cards[i].classList.add('d-none')
  })
}
