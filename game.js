const squares = document.querySelectorAll('.gamesquare')
const brady = document.querySelector('.bradygameimg')
const cam = document.querySelector('.camgameimg')
const ryker = document.querySelector('.rykergameimg')
const myles = document.querySelector('.mylesgameimg')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const text = document.querySelector('.gametext')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

let images = ['bradygameimg',
  'camgameimg',
  'rykergameimg',
  'mylesgameimg'];

let deathMessages = ['Brady has a book series', 'Cam is a pog dungeon master',
  'Ryker has a twitch.tv channel', 'Myles is also a dungeon master'];
let randomPhoto = images[Math.floor(Math.random() * images.length)]

function randomSquare() {
  randomPhoto = images[Math.floor(Math.random() * images.length)]

  squares.forEach(square => {
    square.innerHTML = ''
    images.forEach(photo => {
      square.classList.remove(photo)

    })
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add(randomPhoto)

  hitPosition = randomSquare.id

}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById("game-foreground").style.backgroundColor = "#" + randomColor;
      square.classList.remove(randomPhoto)
      let messageToPhoto = images.indexOf(randomPhoto)
      square.innerHTML = deathMessages[messageToPhoto]
    }

  })
})



function moveMole() {
  timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
  }

}

let countDownTimerId = setInterval(countDown, 1000)