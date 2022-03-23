const squares = document.querySelectorAll('.square')
const brady = document.querySelector('.bradygameimg')
const cam = document.querySelector('.camgameimg')
const ryker = document.querySelector('.rykergameimg')
const myles = document.querySelector('.mylesgameimg')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

let randomimage = new Array();
  randomimage[0] = brady;
  randomimage[1] = cam;
  randomimage[2] = ryker;
  randomimage[3] = myles;

function randomSquare() {
  squares.forEach(square => {
   squares.classList.remove('randomimage')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('randomimage')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
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