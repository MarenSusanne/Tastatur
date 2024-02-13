function pushedLetter(htmlelement){
    let letterPressed = htmlelement.innerHTML;
    document.getElementById('input').value += letterPressed;
}
function pushedSpace(){
    document.getElementById('input').value += ' ';

}
function pushedBack(){
    let alreadyInput = document.getElementById('input');
    let value = alreadyInput.value;
    document.getElementById('input').value = value.slice(0, -1)
}