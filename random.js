document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'white'
    console.log(document.body.style.backgroundColor)
    document.getElementById('textChange').addEventListener('click', () => {
        document.getElementById('changeText').innerHTML = 'Now I say something different!'
    })

    document.getElementById('colorChange').addEventListener('click', () => {
        switch (document.body.style.backgroundColor) {
            case 'white':
                document.body.style.backgroundColor = 'black'
                document.body.style.color = 'white'
                console.log(document.body.style.backgroundColor)
                break;
            case 'black':
                document.body.style.backgroundColor = 'white'
                document.body.style.color = 'black'
                console.log(document.body.style.backgroundColor)
                break;
        }

    })

    document.getElementById('submitBtn').addEventListener('click', () => {
        alert('Your name was totally submitted and recorded, ' + document.getElementById('submissionText').value + '!')
    })

    function generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    document.getElementById('numberGenerator').addEventListener('click', () => {
        let firstNum = parseInt(document.getElementById('firstNum').value)
        let secondNum = parseInt(document.getElementById('secondNum').value)
        let randomNum = generateRandomNumber(firstNum, secondNum)

        if(isNaN(randomNum)){
            alert("One of your entries isn't a number, doofus!")
        }
        else {
            alert("Your random number is: " + randomNum)
        }

    })

    document.getElementById('circleGenerator').addEventListener('click', () => {
        let firstNum = parseInt(document.getElementById('firstCircleNum').value)
        let secondNum = parseInt(document.getElementById('secondCircleNum').value)
        let randomNum = generateRandomNumber(firstNum, secondNum)

        let randomRoot = Math.sqrt(randomNum)
        let roundedRoot= Math.round(randomRoot)

        if(isNaN(randomNum)){
            alert("One of your entries isn't a number, doofus!")
        }
        else {
            console.log(randomNum)
            document.getElementById('circleGrid').innerHTML = ''
            for (let i=1; i < roundedRoot; i++){
                document.getElementById('circleGrid').innerHTML += '<div class="row" style="width:100%;" id="row-' +i +'"></div>'
                for (let x=1; x < roundedRoot; x++){
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    while(randomColor.length < 6){
                        randomColor += 'f'
                    }
                    document.getElementById('row-'+i).innerHTML += '<div class="col" style="border-radius: 100%; width: 30px; height: 30px; background-color: #' + randomColor + ';" id="column-' + x + '"></div>'
                    
                }
            }
            
            /*for (let i=1; i < randomNum; i++){
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                document.getElementById('circleGrid').innerHTML += '<div class="row" style="border-radius:100%; height: 30px; width: 30px; background-color: #' + randomColor + ';"></div>'
            }*/
        }
    })
})