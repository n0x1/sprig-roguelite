/*
@title: 
@author: noxi
@tags: [advanced, roguelite]
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
const spikes = "$"
const ghost = "t"
const bossheart = "&"
const warningtile = "!"
const advancetile = "A"
const playerL = "L"
const playerR = "R"
const playerB = "B"




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
................
................
......0000......
.....00LL00.....
.....0LLLL0.....
....006LL600....
....00LLLL00....
.....00LL00....1
.....00000C...11
....0000CC00.11.
....000C000011..
...00CC000099...
...00CCCCCL00...
..000000000000..
..000000000000..
.0000CC00CC0000.`],
  [playerL, bitmap`
................
................
.....00.........
....0L00........
....L6000.......
....LL000.......
....LL000.......
.1...000C0......
..1..00CC00.....
..11.0CC000.....
...19CC00000....
....L9CCC0000...
.....000000000..
.....000000000..
.....00000000000
.....CC0CC.0000.`],
  [playerR, bitmap`
................
................
.........00.....
........00L0....
.......0006L....
.......000LL....
.......000LL....
......0C000...1.
.....00CC00..1..
.....000CC0.11..
....00000CC91...
...0000CCC9L....
..000000000.....
..000000000.....
00000000000.....
.0000.CC0CC.....`],
  [playerB, bitmap`
................
................
......0000......
.....000000.....
.....000000.....
....00000000....
....00000000....
.....000000.....
.1...C00000.....
.11.00C00000....
..19000CC000....
...0000CC0000...
...000CCCC000...
..000000000000..
.0000000000000..
00000CC00CC000..`],
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
  [bossheart, bitmap`
..000......000..
.04440....04440.
0444440..0444440
0444444004422440
0444444444442240
0444444444444240
0444444444444440
0444444444444440
.04444444444440.
.04444444444440.
..044444444440..
...0444444440...
....04444440....
.....044440.....
......0440......
.......00.......`],
  [ghost, bitmap`
................
......0000......
....00222200....
...0222222220...
..022332233220..
..022332233220..
..022222222220..
..022222222220..
..022222222220..
..022222222220..
..022222222220..
..022222222220..
..022222222220..
..022002022020..
..020.0200200...
...0...0..0.....`],
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
................`], //grave
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
7777777777777777
7771LL1111LL1777
7177LL1LL1LL7717
71177L1LL1L77117
7LL1171LL1711LL7
7LL1LL7777LL1LL7
7LL1L7CCCC7L1LL7
71117CCC7CC71117
7LL17CC7CCC71LL7
7LL17C7007C71LL7
7LL17CC770C71LL7
71177CC7CCC77117
7L771C7C7CC177L7
7771LLCCC7LL1777
77L1LL1771LL1L77
7777777777777777`],
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
  [spikes, bitmap`
................
..1..........1..
..1..........1..
.101........101.
.000........000.
.....1....1.....
.....1....1.....
....101..101....
....000..000....
................
..1..........1..
..1...1..1...1..
.101..1..1..101.
.000.101101.000.
.....000000.....
................`],
  [warningtile, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333663333333
3333333663333333
3333333663333333
3333333663333333
3333333663333333
3333333663333333
3333333333333333
3333333333333333
3333333663333333
3333333663333333
3333333333333333
3333333333333333
3333333333333333`],
  [advancetile, bitmap`
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
................
................
................
................
................
................`] // use for an open world feel in lvls, advancing to a lvl that is not in rotation, but expands upon the prev then goes into rotation
  

)

setSolids([wall, wall2, wall3, housewall, housewallleft,  housewallright, roofbody, player, boss])



let level = 1 // starting level (index 1 in this case)
const levels = [ // easy lvls
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
ffprffffff`,

  //scroller (advancetile having) lvls 
  
  // enemy lvls
  map`
xwvdvxw
xw.m.xw
xw...xw
xw.m.xw
xw...xw
xw...xw
xw...rw`, //goblin corridor
  map`
wvxwvxwvx
w.......x
w.$wvxw.x
w.....w.x
w..w..$.x
wm.w..w.x
wvxwvpwdx`,
  map`
vxwvdvxwvx
v..t.t...x
v.v....v.x
v..xwvxt.x
v........x
v...xw...x
v.....v..x
v..vp....x`,
  map`
vxwvxwvxwvxwvxw
vfwdxfffffffffw
vfftffftfftfffw
vfffffffffffffw
vfggfgtffgffffw
vfftffffffftffw
vfffgfgtffffffw
vfffffffftffffw
vfffftftffffffw
vffgfffgfgffgfw
vtffffffffffffw
vxwvxwvxwvxwvrw`, //ghost graveyard
  map`
wvxwvxwvx
wpx.....x
w.x.vtwmx
w.x.v.w.x
w...v...x
wvxwvxwdx`,
  map`
vxwvdvwwv
v...b...v
v.......v
v.......v
v.......v
v.......v
vxwvpvxwv`,


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

function putGrassGraveyardLvl() {
   let lvlGhosts = getAll(ghost)
  lvlGhosts.forEach(ghost => {
    console.log("ghostForeach");
    addSprite(ghost.x, ghost.y, grass);
  }) 
  
  let tombstones = getAll(hurtplayer);
    tombstones.forEach(hurtplayer => {
    addSprite(hurtplayer.x, hurtplayer.y, grass);
  })
  
  
}


//sounds
const hit = tune`
500: C4/500 + B4/500 + C5/500,
15500`

setPushables({
  [player]: []
})

let gameOver = false;

let plr = getFirst(player);
let score = 0; // tracking when to change difficulty

var mobMoveInterval = setInterval(mobMoveAll, 1000);
var ghostMoveInterval = setInterval(ghostMoveAll, 1200);

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
  let prev = level // temporarily store previous level to prevent repeats
  level = Math.floor(Math.random() * levels.length); // random level above safe ones 

  // idea: random range increases as score increases - maybe add score to lvl length
  
  if (level === 0 || level === 1 || prev == level) // add more lvlvs as scrollers added 
  resetMap() //recursively call until its a dungeon lvl
  console.log("Level: " + level);
  score++;
  setMap(levels[level]);
  createHeartsArray(health);
  addSprite(plr.x,plr.y,spawn);
  plr = getFirst(player);
  if (level === 5) { // index 5 is gy lvl
  putGrassGraveyardLvl(); 
}
}

/* var tempXToPreventSpawnSafetyAbuse;
var tempYToPreventSpawnSafetyAbuse; */w

onInput("s", () => {
  if (!gameOver) {

    // plr = addSprite(orientation down)
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
  let spikeSprites = getAll(spikes);
  let ghostSprites = getAll(ghost);

  
/* if (plr.x === getFirst(spawn).x && plr.y === getFirst(spawn).y && mapJustChanged === false) {
    plr.x = tempXToPreventSpawnSafetyAbuse;
    plr.y = tempYToPreventSpawnSafetyAbuse;
} */

  
  for (let i = 0; i < mobSprites.length; i++) {
  if (plr.x === mobSprites[i].x && plr.y === mobSprites[i].y) {
      playerCollided();
    }
  }
  for (let i = 0; i < ghostSprites.length; i++) {
  if (plr.x === ghostSprites[i].x && plr.y === ghostSprites[i].y) {
      playerCollided();
    }
  }
  for (let i = 0; i < spikeSprites.length; i++) {
    if (plr.x === spikeSprites[i].x && plr.y === spikeSprites[i].y) {
      stillDamage();
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
    let newX = mobSprite.x;1
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
    const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, mob, ghost, wall3, door, spikes, spawn].includes(sprite.type));
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

function ghostMoveAll() {
  const options = ["up", "down", "left", "right"];

  // Get all mob sprites in the game
  let ghostSprites = getAll(ghost);

  // Iterate over each mob sprite
    ghostSprites.forEach(ghostSprite => {
    let randomIndex = Math.floor(Math.random() * options.length);
    let direction = options[randomIndex];

    // Save the current position of the mob sprite
    let newX = ghostSprite.x;
    let newY = ghostSprite.y;

    let oldX = ghostSprite.x;
    let oldY = ghostSprite.y;

      
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
    const isWallCollision = spritesAtNextPos.some(sprite => [mob, heart, spawn, door].includes(sprite.type));
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);

    // Move the mob sprite only if there is no wall collision and not colliding with the player
    if (!isWallCollision && !isPlayerCollision) {
      ghostSprite.x = newX;
      ghostSprite.y = newY;
    } else if (isWallCollision) {
      ghostMoveAll()
    } else if (isPlayerCollision) {
      ghostSprite.x = newX;
      ghostSprite.y = newY;
      playerCollided()
    } else if (ghostSprite.x === oldX && ghostSprite.y === oldY) {
      console.log("wall prevention");
      ghostMoveAll();
    }
  });

}




function playerCollided() { //collide with normal mob
  health--;
  handleHealthUI(health);
  createHeartsArray(health)
  playTune(hit);
  checkGameOver()
  plr.x = getFirst(spawn).x;
  plr.y = getFirst(spawn).y;
}

function stillDamage() { // same but without resetting to spawn
  health--;
  handleHealthUI(health);
  createHeartsArray(health)
  playTune(hit);
  checkGameOver()
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
