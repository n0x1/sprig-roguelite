/*
@title: 
@author: noxi
@tags: []
@addedOn: 2024-00-00
*/



const player = "p"
const hurtplayer = "h"
const boss = "b"
const mob = "m"
const wall = "w"
const wall2 = "v"
const wall3 = "x"
const door = "d"

setLegend(
  [ player, bitmap`
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
......L..L......` ],
  [ hurtplayer, bitmap`
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
......L..L......` ],
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
CCL..........LCC`]
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
xw...xw
xw.p.xw`,
  map`
...d
....
p...`
]

setMap(levels[level])

setPushables({
  [ player ]: [  ]
})

let gameOver = false;

const plr = getFirst(player);
onInput("s", () => {
  plr.y += 1
})
onInput("w", () => {
  plr.y -= 1
})
onInput("a", () => {
  plr.x -= 1
})
onInput("d", () => {
  plr.x += 1
})



afterInput(() => {

  const doorSprite = getFirst(door)
  const bossSprite = getFirst(boss)
  const mobSprite = getFirst(mob)

  if (plr.x === doorSprite.x && plr.y === doorSprite.y) {
    level = level + 1;
    setMap(levels[level]); // Load the next level
  }
  if (plr.x === mobSprite.x && plr.y === mobSprite.y) {
    gameOver = true;
  }


  
  // if level is boss lvl, load hp bar text
  
  // if (playerSprite.x === bossSprite.x && playerSprite.y === bossSprite.y) {
    // Deal dmg?
    // setMap(levels[level]); // Check if player hit the boss
  // }


  checkGameOver()
})

  
  // Mob attack
function mobMove() {
  const options = ["up", "down", "left", "right"];
  var randomIndex = Math.floor(Math.random() * options.length);
  var direction = options[randomIndex];

  // Get references to player and mob sprites
  const playerSprite = getFirst(player);
  const mobSprite = getFirst(mob);

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
  const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, wall3, door].includes(sprite.type));
  const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);


  // Move the mob sprite only if there is no wall collision and not colliding with the player
  if (!isWallCollision && !isPlayerCollision) {
    mobSprite.x = newX;
    mobSprite.y = newY;
  } else if (isWallCollision) {
    mobMove()
  } else if (isPlayerCollision) {
    mobSprite.x = newX;
    mobSprite.y = newY;
    clearInterval(intervalId);
    gameOver = true;
  }
  checkGameOver()
  
}


const intervalId = setInterval(mobMove, 1000)
function checkGameOver() {
if (gameOver === true) {
  const hurtPlayer = addSprite(plr.x, plr.y, hurtplayer);
  
  addText("Game Over", {
  x: 5,
  y: 4,
  color:color`7`
  })
}
}
