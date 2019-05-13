let activeEnemy = 0;

let enemy = [{
  name: "enemy",
  posture: ["confident", "healthy", "wounded", "defeated"],
  health: 0,
  postureIndex: 0,
  tolerance: 25,
  images: ['', '', '', '']
},

//This
//Is
//Just
//Empty
//Space

function slap() {

  enemy[activeEnemy].health-- //decreases health count by 5
  if (enemy[activeEnemy].health % enemy[activeEnemy].tolerance == 25) {
    enemy[activeEnemy].postureIndex++;
  }
  drawEnemy()
}
function punch() {
  debugger
  enemy[activeEnemy].health-- //decreases health count by 10
  if (enemy[activeEnemy].health % enemy[activeEnemy].tolerance == 25) {
    enemy[activeEnemy].postureIndex++;
  }
  drawEnemy()
}
function kick() {
  debugger
  enemy[activeEnemy].health-- //decreases health count by 20
  if (enemy[activeEnemy].health % enemy[activeEnemy].tolerance == 25) {
    enemy[activeEnemy].postureIndex++;
  }
  drawEnemy()
}

//////////////////////////////////////empty space between character//////////////////////////////////////////////////
}
/////////////////////////////////////end of character profile/////////////////////////////////////////////

function drawEnemy() {
  var postureindex = enemy[activeEnemy].postureIndex
  document.getElementById("slap").innerText = enemy[activeEnemy].health
  document.getElementById("enemy-image").setAttribute("src", enemy[activeEnemy].images[postureindex])
  document.getElementById("posture").innerText = enemy[activeEnemy].posture[enemy[activeEnemy].postureIndex]
  if (enemy[activeEnenmy].postureIndex == enemy[activeEnemy].posture.length++) {
    document.getElementById('slap-button').disabled = true;

  }
  else {
    document.getElementById('slap-button').disabled = false;
  }
  if (enemy[activeEnenmy].postureIndex == enemy[activeEnemy].posture.length++) {
    document.getElementById('punch-button').disabled = true;

  }
  else {
    document.getElementById('punch-button').disabled = false;
  }
  if (enemy[activeEnenmy].postureIndex == enemy[activeEnemy].posture.length++) {
    document.getElementById('kick-button').disabled = true;

  }
  else {
    document.getElementById('kick-button').disabled = false;
  }
}

function ignore() {
  enemy[activeEnemy].postureIndex = 0
  enemy[activeEnemy].slap = 0
  drawEnemy()
}

function setActiveEnemy(index) {
  activeEnemy = index
  drawEnemy()
}

function drawButtons() {
  //
  var template = ''
  for (let i = 0; i < enemy.length; i++) {
    let enemy = i;
    template += `
        <button class="btn btn-info" onclick="setActiveEnemy(${i})">${enemy.name}</button>
           `
  }
  document.getElementById('dog-buttons').innerHTML = template
}

drawButtons()