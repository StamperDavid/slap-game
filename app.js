//let activeEnemy = 0;

let enemy = {
  name: "object of your agression",
  posture: ["confident", "healthy", "wounded", "defeated"],
  health: 100,
  postureIndex: 100,
  tolerance: 25,
  images: ['confident', '', '', ''],
  items: []
}

let items = {
  block: { name: "block", modifier: 2, description: 'deflects most of damage from a strike!' },
  dodge: { name: "dodge", modifier: 25, description: 'avoid all damage by avoiding strike' },
  parry: { name: "parry", modifier: 5, description: 'parry to receive only a glancing bloow' }
}
//This
//Is
//Just
//Empty
//Space

function slap() {
  enemy.health -= 5 //decreases health count by 5
  if (enemy.health % enemy.tolerance == 0) {
    enemy.postureIndex -= 5;
  }
  drawEnemy()
}

function punch() {
  enemy.health -= 10 //decreases health count by 10
  if (enemy.health % enemy.tolerance == 0) {
    enemy.postureIndex -= 10;
  }
  drawEnemy()
}

function kick() {
  enemy.health -= 25 - addMods() //decreases health count by 25
  if (enemy.health % enemy.tolerance == 0) {
    enemy.postureIndex -= 25;
  }
  drawEnemy()
}

function block() {
  enemy.items.push(items.block)

}

function dodge() {
  enemy.items.push(items.dodge)
}


function parry() {
  enemy.items.push(items.parry)
}

/////////////////////////////////////end of character profile//////////////////////////////////////////////////////
function addMods() {
  let modTotal = 0
  for (let i = 0; i < enemy.items.length; i++) {
    let item = enemy.items[i]
    modTotal += item.modifier
  }
  enemy.items = []
  return modTotal
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawEnemy() {
  let postureindex = enemy.postureIndex
  document.getElementById("health").innerText = enemy.health.toString()
  document.getElementById("enemy-image").setAttribute("src", enemy.images[postureindex])
  document.getElementById("posture").innerText = enemy.posture[enemy.postureIndex]
  if (enemy.health <= 0) {
    document.getElementById('slap').disabled = true;
    document.getElementById('punch').disabled = true;
    document.getElementById('kick').disabled = true;
  }
  else {
    document.getElementById('slap').disabled = false;
    document.getElementById('punch').disabled = false;
    document.getElementById('kick').disabled = false;
  }
}

//function secondWind({
//  if (enemy.health == 12 || 24 || 36 || 48 || 60){
//  enemy.health += 10;
//};
//})

function reset() {
  enemy.postureIndex = 0
  enemy.slap = 0
  enemy.items = []
  enemy.health = 100
  drawEnemy()
}

function Enemy(index) {
  enemy = index
  drawEnemy()
}
