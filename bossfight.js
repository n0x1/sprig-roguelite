/*
@title: 
@author: noxi
@tags: [dungeon]
@addedOn: 2024-07-07
*/



const player = "p"
const hurtplayer = "g" //game over
const boss = "b"
const mob = "m"
const wall = "w"
const wall2 = "v"
const wall3 = "x"
const door = "d"
const heart = "h"
const spawn = "r"

setLegend(
  [player, bitmap`
.......LL.......
.....LLLLLL.....
....LLLLLLLL....
....L11LL11L....
....L101101L....
.....L1001L.....
......LLLL......
.......11.....00
.....111111..010
.....LLLLLL.010.
.....1LLLL1010..
.....1LLLL100...
.....1C66C0.....
......LLLL......
......L..L......
......L..L......`],
  [hurtplayer, bitmap`
.......LL.......
.....LLLLLL.....
....LLLLLLLL....
....L11LL11L....
....L101101L....
.....L7007L.....
......7LL7......
......7117......
.....111111.....
.....LLL33L.....
.....1LL3L1.....
.....1L3LL1.....
.....1336C0.....
......3LLL......
......L..L......
......L..L......`],
  [heart, bitmap`
..000......000..
.03330....03330.
0333330..0333330
0333333003322330
0333333333332230
0333333333333230
0333333333333330
0333333333333330
.03333333333330.
.03333333333330.
..033333333330..
...0333333330...
....03333330....
.....033330.....
......0330......
.......00.......`],
  [boss, bitmap`
......6.6.6.....
......66366.....
......DDDDD.....
.....D0DD0D.....
..00.DDDDDD.00..
..000.DD0D.000..
...066DDDDDD0...
...DD666DDDDD...
..DDDDD66DDDDD..
.DDDDDDD66DDDDD.
.DD.DDDDD66D.DD.
.DDD.CC66CC.DDD.
..DD.CCCCCC.DD..
......DDDD......
....DDD..DDD....
...DDDD..DDDD...`],
  [mob, bitmap`
................
................
................
................
.....DDDDD......
....DD0D0DD.....
....DDDDDDD.....
....6DDDDD......
......C9C...20..
.....CCCCC.20...
.....CCCCC20....
.....DCCC00.....
......CCC.0.....
......C.C.......
................
................`],
  [wall, bitmap`
0099000099000099
9099099099099099
9099099099099099
9000099000099000
0099000099000099
9099099099099099
9099099099099099
9000099000099000
0099000099000099
9099099099099099
9099099099099099
9000099000099000
0099000099000099
9099099099099099
9099099099099099
9000099000099000`],
  [wall2, bitmap`
0000990000990000
0990990990990990
0990990990990990
0990000990000990
0000990000990000
0990990990990990
0990990990990990
0990000990000990
0000990000990000
0990990990990990
0990990990990990
0990000990000990
0000990000990000
0990990990990990
0990990990990990
0990000990000990`],
  [wall3, bitmap`
9900009900009900
9909909909909909
9909909909909909
0009900009900009
9900009900009900
9909909909909909
9909909909909909
0009900009900009
9900009900009900
9909909909909909
9909909909909909
0009900009900009
9900009900009900
9909909909909909
9909909909909909
0009900009900009`],
  [door, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCLLLLLLCCCCC
CCCCLL....LLCCCC
CCCLL......LLCCC
CCCL........LCCC
CCCL........LCCC
CCL..........LCC
CCL..........LCC
CCL..........LCC
CCL..........LCC
CCL..........LCC
CCL..........LCC
CCL..........LCC`],
  [spawn, bitmap`
................
................
.....CCCCCC.....
.....C..........
....C...........
....CC..........
.....CCCCCC.....
..........CC....
...........C....
.....C.....C....
......C...CC....
.......CCCC.....
................
................
................
................`]

)

setSolids([wall, wall2, wall3, player, boss])

let level = 0
const levels = [
  map`
xwvdvxw
xw.m.xw
xw...xw
xw...xw
xw...xw
xw.p.xw
xw.r.xw`,
  map`
.v......d
.vm......
.v...p...`,
  map`
p.....`
]

setMap(levels[level]); // only for start


const hit = tune`
500: C4/500 + B4/500 + C5/500,
15500`

setPushables({
  [player]: []
})

let gameOver = false;

let plr = getFirst(player);

let maxhealth = 3;
let health = 3;
let heartsArray = [];

function createHeartsArray(health) {
  for (let i = 0; i < health; i++) {
    let heartSprite = addSprite(width() - i - 1, 0, heart);
    heartsArray.push(heart);
  }
}
createHeartsArray(maxhealth) // should be max health at the start of game

function handleHealthUI(maxhealth) {
  heartsArray.pop();
  console.log(heartsArray);
  createHeartsArray(health);
  console.log("handle health ui ran");
  //tis should handle a specific index related to health: heartsArray[health] 
}


const mobSprites = getAll(mob);

function resetMap() {
  level = level + 1;
  setMap(levels[level]);
  createHeartsArray(health);
  plr = getFirst(player);
  addSprite(plr.x,plr.y,spawn);
}

onInput("s", () => {
  if (!gameOver) {
    plr.y += 1; // Move the player down
  }
});
onInput("w", () => {
  if (!gameOver) {
    plr.y -= 1; // Move the player up
  }
});
onInput("a", () => {
  if (!gameOver) {
    plr.x -= 1; // Move the player left
  }
});
onInput("d", () => {
  if (!gameOver) {
    plr.x += 1; // Move the player right
  }
});



afterInput(() => {

  const doorSprite = getFirst(door)
  const bossSprite = getFirst(boss)

  if (plr.x === doorSprite.x && plr.y === doorSprite.y) {
    resetMap() // Load the next level
  }

  for (let i = 0; i < mobSprites.length; i++) {
    let mobSprites = getAll(mob);
    if (plr.x === mobSprites[i].x && plr.y === mobSprites[i].y) {
      playerCollided();
      console.log(i);
    }
  }
  // if level is boss lvl, load hp bar text

  // if (playerSprite.x === bossSprite.x && playerSprite.y === bossSprite.y) {
  // Deal dmg?
  // reswdetMap(levels[level]); // Check if player hit the boss
  // }

})



function mobMoveAll() {
  const options = ["up", "down", "left", "right"];

  // Get all mob sprites in the game
  let mobSprites = getAll(mob);

  // Iterate over each mob sprite
  mobSprites.forEach(mobSprite => {
    let randomIndex = Math.floor(Math.random() * options.length);
    let direction = options[randomIndex];

    // Save the current position of the mob sprite
    let newX = mobSprite.x;
    let newY = mobSprite.y;

    // Calculate the next position based on the random direction
    if (direction === "up") {
      newY -= 1;
    } else if (direction === "down") {
      newY += 1;
    } else if (direction === "left") {
      newX -= 1;
    } else if (direction === "right") {
      newX += 1;
    }

    // Check for wall collision and player exclusion
    const spritesAtNextPos = getTile(newX, newY);
    const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, wall3, door, spawn].includes(sprite.type));
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);

    // Move the mob sprite only if there is no wall collision and not colliding with the player
    if (!isWallCollision && !isPlayerCollision) {
      mobSprite.x = newX;
      mobSprite.y = newY;
    } else if (isWallCollision) {
      mobMoveAll()
    } else if (isPlayerCollision) {
      mobSprite.x = newX;
      mobSprite.y = newY;
      playerCollided()
    }
  });

}

const intervalId = setInterval(mobMoveAll, 1000);


function playerCollided() {
  health -= 1;
  handleHealthUI(maxhealth);
  playTune(hit);
  checkGameOver()
  plr.x = getFirst(spawn).x;
  plr.y = getFirst(spawn).y;
}

function checkGameOver() {
  if (health === 0) {
    const hurtPlayer = addSprite(plr.x, plr.y, hurtplayer);
    plr.remove();
    clearInterval(intervalId);
    addText("Game Over", {
      x: 5,
      y: 4,
      color: color`7`
    })
    addText("reset:j", {
      x: 6,
      y: 5,
      color: color`4`
    })
  }
}
