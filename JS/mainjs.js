var currentID;
function currentBlock() {
    for (i = 1; i <= 15; i++) {
        var blockID = i;
        if ("valid" == document.getElementById(blockID).getAttribute("class")) {
             currentID = blockID;
            return;
        }
    }
}

function cursurKeyDown(blockKeyDown) {
    currentBlock();
    document.getElementById(currentID).className = 'invalid';
    document.getElementById(blockKeyDown).className = 'valid';
};

document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            currentBlock();
            movenext(currentID, -1, 'Left key');
            break;
        case 38:
            currentBlock();
           movenext(currentID, -5, 'Up Key');
            break;
        case 39:
            currentBlock();
            movenext(currentID, +1, 'Right Key');
            break;
        case 40:
            currentBlock();
           movenext(currentID, +5, 'Down Key');
            break;
        default:
            console.log("invalid key");
    }
}

function movenext(current, move, msg) {
    var currPosition = Number(current);
    var move = Number(move);
    var nextPosition = currPosition + move;

    if (nextPosition  < 1 ||nextPosition > 15) {

        var div = document.getElementById('clickmsg');
        div.innerText += '-Invalid key press';
    } else {

        document.getElementById(current).className = 'invalid';
        document.getElementById(nextPosition).className = 'valid';
        var div = document.getElementById('clickmsg');
        div.innerText += "-<br>" + msg;
    }

}