const d = document;

const $squares = d.querySelector(".space"),
  $btnStart = d.querySelector(".btn-start"),
  $btnRestart = d.querySelector(".btn-restart"),
  $bgSpace = d.querySelectorAll(".bg-space"),
  $spaceBoard = d.querySelectorAll(".space-board"),
  $message = d.querySelector('.message-container'),
  $turnPlayer = d.querySelector('.turn-player'),
  $pointP1 = d.getElementById('player1'),
  $pointP2 = d.getElementById('player2')
  
  ;

let turn = '', p1 = 1, p2 = 1, cont = 0;


//FUNCTION TO SELECT A RANDOM PLAYER
const turnRandom = () =>{
  let getTurn = Math.ceil(Math.random()*2)
    $turnPlayer.classList.remove('hide');
    $turnPlayer.querySelector('.turn').innerHTML = `Player ${getTurn}`
    if(getTurn % 2 !== 0){
      d.getElementById('turn1').style.color = "#bb6a00"
      d.getElementById('turn2').style.color = "#fff"
    }else{
      d.getElementById('turn1').style.color = "#fff"
      d.getElementById('turn2').style.color = "#bb6a00"
    }
    setTimeout(()=>{$turnPlayer.classList.add('hide') }, 1500)

  return getTurn
}
//FUNCITION SET THE PARAMETERS TO DETERMINATE A WINNER
const winner =()=>{
  const point = d.querySelectorAll(".bg-space[data-point]");
  const pos1 = point[0].getAttribute("data-point"),
        pos2 = point[1].getAttribute("data-point"),
        pos3 = point[2].getAttribute("data-point"),
        pos4 = point[3].getAttribute("data-point"),
        pos5 = point[4].getAttribute("data-point"),
        pos6 = point[5].getAttribute("data-point"),
        pos7 = point[6].getAttribute("data-point"),
        pos8 = point[7].getAttribute("data-point"),
        pos9 = point[8].getAttribute("data-point")
  cont++
  console.log(cont)
  if(cont === 9){
    $message.classList.remove("hide");
    $message.querySelector(".winner").innerHTML = `Empate`;
    setTimeout(()=>{
      $message.classList.add("hide")
      del()
    }, 1500)
    cont = 0;
  }  

  if(pos1 === pos2 && pos2 === pos3)getWinner(pos1)
  if(pos4 === pos5 && pos5 === pos6)getWinner(pos4)
  if(pos7 === pos8 && pos8 === pos9)getWinner(pos7)
  
  if(pos1 === pos4 && pos4 === pos7)getWinner(pos1)
  if(pos2 === pos5 && pos5 === pos8)getWinner(pos2)
  if(pos3 === pos6 && pos6 === pos9) getWinner(pos3)

  if(pos1 === pos5 && pos5 === pos9) getWinner(pos1)
  if(pos3 === pos5 && pos5 === pos7) getWinner(pos3)

}
//FUNCTION TO GET MESSAGE OF WINNER

const getWinner = (player) =>{
  $message.classList.remove("hide")
    $message.querySelector(".winner").innerHTML = `Player ${player} win`
    if(player % 2 !== 0){
      $pointP1.innerHTML = `${p1++}`
    }else{
      $pointP2.innerHTML = `${p2++}`
    }

    setTimeout(()=>{
      
      $message.classList.add("hide")
      del()
    }, 1500)
    cont = 0;
    
    if(turn % 2 !== 0){
      d.getElementById('turn1').style.color = "#bb6a00"
      d.getElementById('turn2').style.color = "#fff"
    }else{
      d.getElementById('turn1').style.color = "#fff"
      d.getElementById('turn2').style.color = "#bb6a00"
    }
    
}

//FUNCTION TO ERASE ONLY THE BOARD
const del = ()=>{
  d.querySelectorAll('.el-space')
  .forEach(el =>{
    el.innerHTML = ``;
  })
  $bgSpace.forEach(el=>{
    el.dataset.point = Math.random()
  })
}

d.addEventListener("click", e =>{
  const $div = d.createElement("div") 
  
  
  if(e.target === $btnStart){
    e.target.classList.add('hide')
    $btnRestart.classList.remove('hide')
    $bgSpace.forEach(el =>{
      el.dataset.point = `${Math.random()}`
    })
    turn = turnRandom();
    
  }
  if(e.target.matches(".bg-space") && turn !== ''){
    if(turn % 2 !== 0){
      //CIRCLE player 1
      $div.className = "el-space"
      $div.innerHTML =`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
    
    <g id="Capa_2">
     <rect class="st0" width="600" height="600"/>
    </g>
    <g id="Capa_1">
     <circle class="dash circle" cx="300" cy="300" r="243"/>
    </g>
                      </svg>`
      e.target.insertAdjacentElement("afterend", $div)
      e.target.dataset.point = "1"
      if(turn % 2 !== 0){
        d.getElementById('turn2').style.color = "#bb6a00"
        d.getElementById('turn1').style.color = "#fff"
      }else{
        d.getElementById('turn2').style.color = "#fff"
        d.getElementById('turn1').style.color = "#bb6a00"
      }
      turn++;
      //console.log(turn)
    }else{
      $div.className = "el-space"
      //CROSS player 2
      $div.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
   
   <g id="Capa_2_1_">
     <rect class="st0" width="600" height="600"/>
   </g>
   <line class="dash cross" x1="72.8" y1="522.4" x2="517.5" y2="77.6"/>
   <line class="dash cross" x1="517.5" y1="522.4" x2="72.8" y2="77.6"/>
   </svg>
    `
      e.target.insertAdjacentElement("afterend", $div)
      e.target.dataset.point = "2"
      d.getElementById('turn1').style.color = "#fff"
      d.getElementById('turn2').style.color = "#bb6a00"
      if(turn % 2 !== 0){
        d.getElementById('turn2').style.color = "#bb6a00"
        d.getElementById('turn1').style.color = "#fff"
      }else{
        d.getElementById('turn2').style.color = "#fff"
        d.getElementById('turn1').style.color = "#bb6a00"
      }
      turn--;
      //console.log(turn)
    }

    /* if(turn % 2 !== 0){
      d.getElementById('turn1').style.color = "#bb6a00"
      d.getElementById('turn2').style.color = "#fff"
    }else{
      d.getElementById('turn1').style.color = "#bb6a00"
      d.getElementById('turn2').style.color = "#fff"
    } */
    winner()

  }

  if(e.target === $btnRestart){
    p1 = 1;
    p2 = 1;
    $pointP1.innerHTML = '0'
    $pointP2.innerHTML = '0'
    turn = turnRandom();
    
    setTimeout(()=>{$turnPlayer.classList.add('hide')}, 1500);
    del()
  }

})




