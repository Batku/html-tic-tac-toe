allSlots = document.getElementsByClassName('slot');
var turn = 1

bo = [["","",""],
      ["","",""],
      ["","",""]]

for (let i = 0; i < allSlots.length; i++){
    allSlots[i].addEventListener("click", function(){
      if (allSlots[i].innerHTML != '' || checkWin() == true){return}
      makeTurn(allSlots[i])
      if (checkWin() == true){
        document.getElementById("wintext").innerHTML = `Player ${turn} wins`
        document.getElementById('overlay').style.display = 'block'
      }
      else{if(checkTie()==true){
        document.getElementById("wintext").innerHTML = `It's a DRAW`
        document.getElementById('overlay').style.display = 'block'
      }}

      if (turn == 1){turn = 2}else {turn = 1}
    });
}

function makeTurn(slot){
  switch(turn){
    case 1:
      slot.innerHTML = 'X'
      bo[slot.id[0]-1][slot.id[1]-1] = 'X'
      break;
    case 2:
      slot.innerHTML = 'O'
      bo[slot.id[0]-1][slot.id[1]-1] = 'O'
      break;
  }
}

function checkWin(){
  //rows
  for (let i = 0; i < 3; i++){
    if (bo[i][0] == bo[i][1] && bo[i][1] == bo[i][2] && bo[i][0] != ''){
      return true;
    }
  }
  //collumns
  for (let i = 0; i < 3; i++){
    if (bo[0][i] == bo[1][i] && bo[1][i] == bo[2][i] && bo[0][i] != ''){
      return true
    }
  }
  //diags (probably could be done better)
  if (bo[0][0] == bo[1][1] && bo[1][1] == bo[2][2] && bo[1][1] != ''){
    return true
  }
  if (bo[0][2] == bo[1][1] && bo[1][1] == bo[2][0] && bo[1][1] != ''){
    return true
  }

  return false
}

function checkTie(){
  for (let i = 0; i < 3; i++){
    if (bo[i].includes("")){
      return false;
    }
  }
  return true;
}

function reset(){
  document.getElementById('overlay').style.display = 'none'
  bo = [["","",""],
      ["","",""],
      ["","",""]]
  for (let i = 0; i < allSlots.length; i++){
    allSlots[i].innerHTML = ""
  }
}