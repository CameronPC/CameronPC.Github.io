const squares = document.querySelectorAll('.gamesquare')
const brady = document.querySelector('.bradygameimg')
const cam = document.querySelector('.camgameimg')
const ryker = document.querySelector('.rykergameimg')
const myles = document.querySelector('.mylesgameimg')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const text = document.querySelector('.gametext')

const reset = document.getElementById("resetbutton")
const start = document.getElementById("startbutton")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let gameStart = false;
let countDownTimerId

let images = ['bradygameimg',
  'camgameimg',
  'rykergameimg',
  'mylesgameimg'];

let deathMessages = ['Brady has a book series', 'Cam is a pog dungeon master',
  'Ryker has a twitch.tv channel', 'Myles is also a dungeon master'];
let randomPhoto = images[Math.floor(Math.random() * images.length)]

start.addEventListener('click', () => {
    if (gameStart != true) {
        console.log("started!")
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        gameStart = true
        beginGame()
    }
    
})

reset.addEventListener('click', () => {
    gameStart = false
    currentTime = 60
    timeLeft.textContent = currentTime
    result = 0;
    score.textContent = result
    document.getElementById("game-foreground").style.backgroundColor = "#242424"
    squares.forEach(square => {
        square.innerHTML = ''
        images.forEach(photo => {
            square.classList.remove(photo)

        })
    })
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    beginGame()
})

function beginGame() {
    if (gameStart == true) {
        function randomSquare() {
            if (gameStart == true) {
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
        }

        if (gameStart == true) {
            squares.forEach(square => {
                square.addEventListener('mousedown', () => {
                    if (square.id == hitPosition) {
                        result++
                        score.textContent = result
                        hitPosition = null
                        square.classList.remove(randomPhoto)
                        let messageToPhoto = images.indexOf(randomPhoto)
                        square.innerHTML = deathMessages[messageToPhoto]
                    }

                })
            })
        }



        if (gameStart == true) {
            function moveMole() {
                timerId = setInterval(randomSquare, 1000)
            }

            moveMole()
        }




        function countDown() {
            if (gameStart == true) {
                currentTime--
                timeLeft.textContent = currentTime

                if (currentTime == 0) {
                    clearInterval(countDownTimerId)
                    clearInterval(timerId)
                    alert('GAME OVER! Your final score is ' + result)
                    result = 0
                    score.textContent = result
                    gameStart = false;
                }
            }
        }

        countDownTimerId = setInterval(countDown, 1000)
    } else {
        return;
    }
}
 

