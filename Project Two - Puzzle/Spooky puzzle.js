rangeTwo.onchange = puzzleOneCheck;
rangeThree.onchange = puzzleOneCheck;
finishPuzzleOne.onclick = puzzleOneDone;

stepOne.onclick = p2stepOne;
stepTwo.onclick = p2stepTwo;
stepThree.onclick = p2stepThree;
finishPuzzleTwo.onclick = puzzleTwoDone;

finishPuzzleThree.onclick = puzzleThreeCheck;

function puzzleOneCheck(){
    if(rangeTwo.value == rangeOne.value){
        rangeTwo.classList.add('aligned');
    }
    if(rangeThree.value == rangeOne.value){
        rangeThree.classList.add('aligned');
    }
    if(rangeTwo.value != rangeOne.value){
        rangeTwo.classList.remove('aligned');
    }
    if(rangeThree.value != rangeOne.value){
        rangeThree.classList.remove('aligned');
    }

    if(rangeTwo.classList.contains('aligned')){
        if(rangeThree.classList.contains('aligned')){
            finishPuzzleOne.classList.remove('hidden');
        }
    }
}
function puzzleOneDone(){
    puzzleOne.classList.add('hidden');
    puzzleTwo.classList.remove('hidden');
}

function p2stepOne(){
    stepOne.classList.add('unlocked');
}
function p2stepTwo(){
    if(stepOne.classList.contains('unlocked')){
        stepTwo.classList.add('unlocked');
    }
}
function p2stepThree(){
    if(stepTwo.classList.contains('unlocked')){
        stepThree.classList.add('unlocked');
        finishPuzzleTwo.classList.remove('hidden');
    }

}
function puzzleTwoDone(){
    puzzleTwo.classList.add('hidden');
    puzzleThree.classList.remove('hidden');
}

function puzzleThreeCheck(){
    if(finalInput.value == "one two three"){
        puzzleThree.classList.add('hidden');
        celebration.classList.remove('hidden');
    }
}