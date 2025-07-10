function displayCalc() {
             document.querySelector('.calcScreen')
            .innerHTML = calculation;
            
        }
        
        console.log(JSON.parse (localStorage.getItem('calculate')));
        
          let calculation =''

        localStorage.setItem('calculate', JSON.stringify(calculation));

        // document.querySelector('.calcScreen')
        // .innerHTML = `${calculation}`;