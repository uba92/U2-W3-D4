const PEXEL_URL = 'https://api.pexels.com/v1/search?query=horse'

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
    })
    .catch((error) => {
      console.log('error', error)
    })
})

const NEW_PEXEL_URL = 'https://api.pexels.com/v1/search?query=cow'
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

fetch(PEXEL_URL, {
  method: 'GET',
  headers: {
    Authorization: API_KEY,
  },
}).then((response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error('Errore nella richiesta!')
  }
})
