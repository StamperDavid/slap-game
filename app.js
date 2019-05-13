//let activeEnemy = 0;

let enemy = {
  name: "object of your agression",
  posture: ["confident", "healthy", "wounded", "defeated"],
  health: 100,
  postureIndex: 0,
  tolerance: 25,
  images: ['', '', '', '']
}

//This
//Is
//Just
//Empty
//Space

function slap() {
  enemy.health-- //decreases health count by 5
  if (enemy.health % enemy.tolerance == 0) {
    enemy.postureIndex - 5;
  }
  drawEnemy()
}

function drawEnemy() {
  var postureindex = enemy.postureIndex
  document.getElementById("slap").innerText = enemy.health.toString()
  document.getElementById("enemy-image").setAttribute("src", enemy.images[postureindex])
  document.getElementById("posture").innerText = enemy.posture[enemy.postureIndex]
  if (enemy.postureIndex == enemy.posture.length++) {
    document.getElementById('slap-button').disabled = true;

  }
  else {
    document.getElementById('slap-button').disabled = false;
  }
}


function punch() {
  enemy.health-- //decreases health count by 10
  if (enemy.health % enemy.tolerance == 0) {
    enemy.postureIndex - 10;
  }
  drawEnemy()
}

function drawEnemy() {
  var postureindex = enemy.postureIndex
  document.getElementById("slap").innerText = enemy.health.toString()
  document.getElementById("enemy-image").setAttribute("src", enemy.images[postureindex])
  document.getElementById("posture").innerText = enemy.posture[enemy.postureIndex]
  if (enemy.postureIndex == enemy.posture.length++) {
    document.getElementById('slap-button').disabled = true;

  }
  else {
    document.getElementById('slap-button').disabled = false;
  }
}

function kick() {
  enemy.health-- //decreases health count by 25
  if (enemy.health % enemy.tolerance == 0) {
    enemy.postureIndex - 25;
  }
  drawEnemy()
}
//////////////////////////////////////empty space between character//////////////////////////////////////////////////

/////////////////////////////////////end of character profile/////////////////////////////////////////////

function drawEnemy() {
  var postureindex = enemy.postureIndex
  document.getElementById("slap").innerText = enemy.health.toString()
  document.getElementById("enemy-image").setAttribute("src", enemy.images[postureindex])
  document.getElementById("posture").innerText = enemy.posture[enemy.postureIndex]
  if (enemy.postureIndex == enemy.posture.length++) {
    document.getElementById('slap-button').disabled = true;

  }
  else {
    document.getElementById('slap-button').disabled = false;
  }
  if (enemy.postureIndex == enemy.posture.length++) {
    document.getElementById('punch-button').disabled = true;

  }
  else {
    document.getElementById('punch-button').disabled = false;
  }
  if (enemy.postureIndex == enemy.posture.length++) {
    document.getElementById('kick-button').disabled = true;

  }
  else {
    document.getElementById('kick-button').disabled = false;
  }
}

function reset() {
  enemy.postureIndex = 0
  enemy.slap = 0
  drawEnemy()
}

function setActiveEnemy(index) {
  enemy = index
  drawEnemy()
}

function drawButtons() {
  //
  var template = ''
  for (let i = 0; i < enemy.length; i++) {
    let enemy = [i];
    template += `
        <button class="btn btn-info" onclick="setActiveEnemy(${i})">${enemy}</button>
           `
  }
  document.getElementById('enemy-buttons').innerHTML = template
}

drawButtons()