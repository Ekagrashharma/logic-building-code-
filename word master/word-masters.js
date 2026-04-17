const alphaBox = document.querySelectorAll(".scoreboard-letter");
const infoBar = document.querySelector(".info-bar");
const MAX_ALPHABET_LENGTH = 5 ;

async function wordy() {
    let currentGuess = '';
    let currentRow = 0 ;
        


    function addLetter(letter){
        if( currentGuess.length < MAX_ALPHABET_LENGTH ){
            currentGuess += letter ;
        }else {
            currentGuess = currentGuess.substring(0, currentGuess.length -1 )+ letter 
            // remove the last letter from the guess and add the new letter with it
        }
        alphaBox[MAX_ALPHABET_LENGTH * currentRow + currentGuess.length -1 ].innerText = letter
    }



async function commit(){
    if(currentGuess.length !== MAX_ALPHABET_LENGTH){
        // do nothing
        return ;
        }
        //  TODO   validate the word 

        //  TODO   mark them right , wrong , close 

        //  TODO   show  result 

        currentRow++ ;
        currentGuess = '';
    }

function removeElement(){
    currentGuess = currentGuess.substring(0, currentGuess.length -1 );
    alphaBox[MAX_ALPHABET_LENGTH * currentRow + currentGuess.length].innerText = ""
}

    document.addEventListener("keydown", function handleKeyPress(e) {
    const action = e.key;
    
    console.log(action)


    if (action === 'Enter') {
        commit();
    } else if (action === 'Backspace') {
        removeElement();
    } else if (isLetter(action)) {
        addLetter(action).toUpperCase();
    } else {
      // do nothing
    }
});
}


function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}
wordy();
