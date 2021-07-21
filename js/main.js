    const num = document.querySelectorAll('.num');
    let operator = document.querySelectorAll('.operator');
    const  result = document.querySelector('.result');
    const clear = document.getElementById("clear")
    let  activeNum = "";
    let oldNum = "";
    let  resultNum;
    let  operatorNum;
    const  equal = document.querySelector('#equal');


    const setNumber = function() {
       
        if(resultNum) {
          activeNum = this.getAttribute("data-num")
          resultNum = ""
        }else {
          activeNum += this.getAttribute('data-num')
        }

        result.innerHTML = activeNum;
        
    };

    const saveNumber = function() {
        oldNum = activeNum;
        activeNum = "";
        operator = this.getAttribute("data-ops")
        equal.setAttribute("data-result", "")
    };

    const clearAll = function() {
        activeNum = "";
        oldNum = "";
        result.innerHTML = "0";
        equal.setAttribute('data-result', resultNum)


    }

    const displayNum = function() {
        oldNum = parseFloat(oldNum);
        activeNum = parseFloat(activeNum);

        switch(operator) {
            case "plus":
                resultNum = oldNum + activeNum;
                break;
            case "minus":
                resultNum = oldNum - activeNum;
                break;
            case "mult":
                resultNum = oldNum * activeNum;
                break;
            case "divide":
                resultNum = oldNum / activeNum;
                break;
            case "percent":
                result = oldNum % activeNum;
                break;
            
            default: resultNum = num;
        }
        actualDisplay()
    }

    function actualDisplay() {
        result.innerHTML = resultNum;
        equal.setAttribute("data-result", resultNum)
        oldNum = 0;
        activeNum = resultNum;
    }

    


    equal.addEventListener('click', displayNum)

    clear.addEventListener('click', clearAll)


    operator.forEach((item) => {
        item.addEventListener('click', saveNumber)
    })

    num.forEach((item) => {
        item.addEventListener('click', setNumber)
    })

    

