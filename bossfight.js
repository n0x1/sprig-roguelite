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
const rooftip = "a"
const grass = "f"
const housewall = "c"
const roofleft = "l"
const roofright = "z"
const roofoverhangleft = "j"
const roofoverhangright = "k"
const roofbody = "q"
const housewallleft = "e"
const housewallright = "i"
const housedoor = "n"
const stonefloor = "o"


setLegend(
  [rooftip, bitmap`
................
................
................
................
................
................
................
................
................
................
.......00.......
......0330......
....00333300....
...0333333330...
.00333333333300.
0333333333333330`],
  [roofleft, bitmap`
...............0
.............003
...........00333
..........033333
........00333333
.......033333333
.....00333333333
...0033333333333
.003333333333333
0333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
0000000000000000`],
  [roofright, bitmap`
0...............
300.............
33300...........
333330..........
33333300........
333333330.......
33333333300.....
3333333333300...
333333333333300.
3333333333333330
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
0000000000000000`],
  [roofoverhangleft, bitmap`
................
................
................
................
................
................
................
................
................
................
..............00
............0033
..........003333
.......000333333
......0333333333
.....00000000000`],
  [roofoverhangright, bitmap`
................
................
................
................
................
................
................
................
................
................
00..............
3300............
333300..........
333333000.......
3333333330......
00000000000.....`],
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
    [hurtplayer, bitmap`
................
................
................
................
......LLLL......
....LLL11LLL....
....L111111L....
....L111111L....
...L00110100L...
...L010101010...
...L00110100L...
...L01010101L...
...L11111111L...
..CCCCCCCCCCCC..
.....CC.CCC.....
................`],
  [wall, bitmap`
11LL1111LL1111LL
L1LL1LL1LL1LL1LL
L1LL1LL1LL1LL1LL
L1111LL1111LL111
11LL1111LL1111LL
L1LL1LL1LL1LL1LL
L1LL1LL1LL1LL1LL
L1111LL1111LL111
11LL1111LL1111LL
L1LL1LL1LL1LL1LL
L1LL1LL1LL1LL1LL
L1111LL1111LL111
11LL1111LL1111LL
L1LL1LL1LL1LL1LL
L1LL1LL1LL1LL1LL
L1111LL1111LL111`],
  [wall2, bitmap`
1111LL1111LL1111
1LL1LL1LL1LL1LL1
1LL1LL1LL1LL1LL1
1LL1111LL1111LL1
1111LL1111LL1111
1LL1LL1LL1LL1LL1
1LL1LL1LL1LL1LL1
1LL1111LL1111LL1
1111LL1111LL1111
1LL1LL1LL1LL1LL1
1LL1LL1LL1LL1LL1
1LL1111LL1111LL1
1111LL1111LL1111
1LL1LL1LL1LL1LL1
1LL1LL1LL1LL1LL1
1LL1111LL1111LL1`],
  [wall3, bitmap`
LL1111LL1111LL11
LL1LL1LL1LL1LL1L
LL1LL1LL1LL1LL1L
111LL1111LL1111L
LL1111LL1111LL11
LL1LL1LL1LL1LL1L
LL1LL1LL1LL1LL1L
111LL1111LL1111L
LL1111LL1111LL11
LL1LL1LL1LL1LL1L
LL1LL1LL1LL1LL1L
111LL1111LL1111L
LL1111LL1111LL11
LL1LL1LL1LL1LL1L
LL1LL1LL1LL1LL1L
111LL1111LL1111L`],
  [door, bitmap`
LL1111LCCL1111LL
LL1LL1CFFC1LL1LL
LL1LL11FF11LL1LL
111LL111111LL111
LL111100001111LL
LL1LL0CCCC0LL1LL
LL1L0CCCCCC0L1LL
1110CCCCCCCC0111
LL10CCCCCCCC01LL
LL0CCCCCCCCCC0LL
LL0CCCCC0000C0LL
110CCCCCCCC0C011
LL0CCCCCCCCCC0LL
LL0CCCCCCCCCC0LL
LL0CCCCCCCCCC0LL
110CCCCCCCCCC011`],
  [spawn, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
L8888888888LLLLL
L8LLLLLLLL88LLLL
88LLLLLLLLLLLLLL
L8LLLLLLLLLLLLLL
L88LLLLLLLLLLLLL
LLL888888LLLLLLL
LLLLLLLL888LLLLL
LLLLLLLLLL8LLLLL
LLLLLLLLLL8LLLLL
LL8LLLLLL88LLLLL
LLL8LLL888LLLLLL
LLL8888LLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [grass, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDFDDDDDDDDD
DDDDDFDDDDFDDDFD
DDDFDFDDDFDDFFDD
DDFDDDDDDFDDDDDD
DDFDDDFDFDDDDDDD
DFDDDFDDDDDDDDFD
DDDDDFDDDFDDDFDD
DDDDDFDDFDDDDFDD
DDDDDDDDFDDDFDDD
DDDDDDDDDDDDDDDD
DDDDFDDDDDDDDDDF
DDDFDDDDDDFDDDDF
DDDFDDDDDFDDDDFD
DDDDDDDDDDDDDDFD
DDDDDDDDDDDDDDFD`],
  [housewall, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [housewallleft, bitmap`
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC
0CCCCCCCCCCCCCCC`],
  [housewallright, bitmap`
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0
CCCCCCCCCCCCCCC0`],
  [roofbody, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
0000000000000000`],
  [housedoor, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCC0000000000CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC09C0666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC
CCC0990666660CCC`],
  [stonefloor, bitmap`
0000000000000000
0111111111111110
0101111111111010
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0111111111111110
0101111111111010
0111111111111110
0000000000000000`],
  

)

setSolids([wall, wall2, wall3, housewall, housewallleft,  housewallright, roofbody, player, boss])



let level = 1 // starting level (index 1 in this case)
const levels = [
  // shop (interior) lvls
    map`
..........
..........
..........
..........
..........
..........
..........
........p.`,
  //start lvl
  map`
ffffffdfff
ffffffffff
ffafffffff
jlqzkfffff
feciffffff
feniffffff
ffffffffff
ffpfffffff`,
  // enemy lvls
  map`
xwvdvxw
xwomoxw
xwoooxw
xwomoxw
xwoooxw
xwoooxw
xwopoxw`,
  map`
wvxwvxwvx
w.......x
w..wvxw.x
w.....w.x
w..w..w.x
wm.w..w.x
wvxw.pwdx`,
  map`
..........
..........
..........
..........
..........
..........
..........
....p.....`


]

setMap(levels[level]); // only for start

function putGrassUnderRoofs() { // and under the player 
  let grassUnderRoof = getAll(rooftip);
grassUnderRoof.forEach(rooftip => {
  addSprite(rooftip.x, rooftip.y,grass);
})

grassUnderRoof = getAll(roofleft)
grassUnderRoof.forEach(roofleft => {
  addSprite(roofleft.x, roofleft.y,grass);
})
  grassUnderRoof = getAll(roofright)
grassUnderRoof.forEach(roofright => {
  addSprite(roofright.x, roofright.y,grass);
})
  grassUnderRoof = getAll(roofoverhangleft)
grassUnderRoof.forEach(roofoverhangleft => {
  addSprite(roofoverhangleft.x, roofoverhangleft.y,grass);
})
    grassUnderRoof = getAll(roofoverhangright)
grassUnderRoof.forEach(roofoverhangright => {
  addSprite(roofoverhangright.x, roofoverhangright.y,grass);
})

  addSprite(2,7,grass);
  


} 
putGrassUnderRoofs() // and under the player
function putStoneUnderMobs() {
  //wip
}

const hit = tune`
500: C4/500 + B4/500 + C5/500,
15500`

setPushables({
  [player]: []
})

let gameOver = false;

let plr = getFirst(player);
let score = 0;

var mobMoveInterval = setInterval(mobMoveAll, 1000);

const maxhealth = 3;
var health = maxhealth;
let heartsArray = [];

function createHeartsArray(health) {
  heartsArray = [];
  for (let i = 0; i < health; i++) {
    let heartSprite = addSprite(width() - i - 1, 0, heart);
    heartsArray.push(heart);
  }
}
// createHeartsArray(maxhealth) // should be max health at the start of game BUT dont need until going in

function updateHeartsArray(health) {
  heartsArray = [];
  let tempHeart = getAll(heart);
  tempHeart.forEach(heart => {
    heart.remove();
  })
  for (let i = 0; i < health; i++) {
    let heartSprite = addSprite(width() - i - 1, 0, heart)
  }
}

function handleHealthUI(health) {
  // heartsArray.splice(health, 1);
  let tempHeart = getAll(heart);
  tempHeart.forEach(heart => {
    heart.remove();
  });
  createHeartsArray(health);

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
onInput("j", () => { // RESET game if game over is on
  if (gameOver) {
  level = 1
  setMap(levels[level]);
    
  clearText();
    
  health = maxhealth;
  heartsArray = [];
  
  putGrassUnderRoofs();
    
  plr = getFirst(player);
  plr.x = 2;
  plr.y = 7;

  gameOver = false;
  }
});


afterInput(() => {
  const doorSprite = getFirst(door)
  const houseDoor = getFirst(housedoor)
  const bossSprite = getFirst(boss)

  if (getAll(door).length > 0 && plr.x === doorSprite.x && plr.y === doorSprite.y) {
    resetMap() // Load the next level (mob lvls)
  }
  if (getAll(housedoor).length > 0 && plr.x === houseDoor.x && plr.y === houseDoor.y) {
    setMap(levels[0]);
    plr = getFirst(player);
  }


  
  let mobSprites = getAll(mob); // collision via player movement check
  for (let i = 0; i < mobSprites.length; i++) {

    if (plr.x === mobSprites[i].x && plr.y === mobSprites[i].y) {
      playerCollided();
      console.log("collided")
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
    const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, mob, wall3, door, spawn].includes(sprite.type));
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




function playerCollided() {
  health--;
  handleHealthUI(health);
  createHeartsArray(health)
  playTune(hit);
  checkGameOver()
  plr.x = getFirst(spawn).x;
  plr.y = getFirst(spawn).y;
}

function checkGameOver() {
  if (health === 0) {
    const grave = addSprite(plr.x, plr.y, hurtplayer);
    plr.remove();
    gameOver = true;

    addText("Game Over", {
      x: 5,
      y: 4,
      color: color`3`
    })
    addText("reset:j", {
      x: 6,
      y: 5,
      color: color`4`
    })
  }
}
