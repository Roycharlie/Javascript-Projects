let score= (JSON.parse(localStorage.getItem ('score'))) || {
            wins: 0,
            losses: 0,
            ties: 0
        }

         updateScoreElement()

        
      
        // if (score === null){
        //     wins = 0
        //     losses = 0
        //     ties = 0
        // }

        //   {
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        // }

        let isAutoPlaying = false;

        function autoPlay(){
            if(!isAutoPlaying) {
                intervalId = setInterval(() => {
                    const mygame = pickComputerMove();
                    playGame(mygame);
                }, 1000)
                isAutoPlaying = true;

                document.querySelector('.autoPlay')
                .innerHTML = 'Stop Playing'
            } else {
                clearInterval(intervalId) 
                    isAutoPlaying = false;
                
                document.querySelector('.autoPlay')
                .innerHTML = 'Auto Play'
            }

            }
            document.querySelector('.js-rock-button')
            .addEventListener('click', () =>{
                    playGame('rock')
                
            });
            document.querySelector('.js-paper-button')
            .addEventListener('click', () => {
                    playGame('paper')
                });

            document.querySelector('.js-scissors-button')
            .addEventListener('click', () => {
                    playGame('scissors')
                })

                document.querySelector('.js-reset-button')
                .addEventListener('click', () => {
                    showResetConfiguration();
                })

             document.body.addEventListener('keydown', (event) => {
                if (event.key === 'r'){
                    playGame('rock')
                } else if(event.key === 'p') {
                    playGame('paper')
                } else if (event.key === 's'){
                    playGame('scissors')
                } else if(event.key === 'a') {
                    autoPlay()
                } else if (event.key === 'Backspace') {
                    showResetConfiguration()
                }
             })
             function showResetConfiguration() {
                document.querySelector('.js-reset-confirmation')
                .innerHTML = `
                Are you sure you want to reset score?
                <button class="js-reset-confirm-yes reset-confirm-button">
                Yes
                </button>
                <button class="js-reset-confirm-no reset-confirm-button">
                No
                </button>`;
             

             document.querySelector('.js-reset-confirm-yes')
             .addEventListener('click', () => {
                resetScore();
                hideResetConfirmation();
             });

             document.querySelector('.js-reset-confirm-no')
             .addEventListener('click', () => {
                hideResetConfirmation();
             });
            };

             function hideResetConfirmation () {
                document.querySelector('.js-reset-confirmation')
                 .innerHTML = '';
             }  
             
             
             function  resetScore() {
                    score.wins =0,
                    score.losses = 0,
                    score.ties = 0

                    localStorage.removeItem(score)

                    updateScoreElement()
             }
        function playGame(myGame) {
            const computerMove =pickComputerMove();

            let result='';

            if (myGame === 'rock'){
                if (computerMove === 'rock'){
                    result = 'Tie'
                } else if (computerMove === 'paper'){
                    result = 'You lose';
                } else if (computerMove === 'scissors'){
                    result = 'You win';
                }
            } else if (myGame === 'paper'){
                if (computerMove === 'rock'){
                    result = 'You win';
                } else if (computerMove === 'paper'){
                    result = 'Tie';
                } else if (computerMove === 'scissors'){
                    result = 'You lose';
                }
            } else if (myGame === 'scissors'){
                if (computerMove === 'rock'){
                    result = 'You lose';
                } else if (computerMove === 'paper'){
                    result = 'You win';
                } else if (computerMove === 'scissors'){
                    result = 'Tie';
                }
                
        }

        if(result === 'You win'){
            score.wins +=1
        } else if (result === 'You lose'){
            score.losses +=1;
        } else if (result === 'Tie'){
            score.ties +=1;
        }

         localStorage.setItem("score" ,JSON.stringify (score));

         updateScoreElement()

         document.querySelector('.js-results').innerHTML = `${result}`;
    
        document.querySelector('.js-moves').innerHTML = `You <img src="Images/${myGame}-emoji.png" class="icon-image">
    <img src="Images/${computerMove}-emoji.png" class="icon-image"> Computer`
 
    }    
  
        function updateScoreElement() {
            document.querySelector('.rock-score')
        .innerHTML = `wins ${score.wins}, losses ${score.losses}, ties ${score.ties}`;
      }
        function pickComputerMove(){
            const ranDom = Math.random();

            if (ranDom >= 0 && ranDom < 1/3){
                computerMove = 'rock';
            } else if (ranDom >= 1/3 && ranDom < 2/3){
                computerMove = 'paper';
            } else if (ranDom >= 2/3 && ranDom < 1){
                computerMove = 'scissors';
            }
            return computerMove
        }