/*
@title: 
@author: noxi
@tags: [dungeon]
@addedOn: 2024-07-07
*/

/* controls
wasd:move
i: swing
j/l: turn
k: special
*/


/* bulletin 
   add more mobs:
   fire shooters

   chests
   
   boss attack pattern
   attack for player & direction changes

   then add scroller lvls & difficulty curve (with score var

   storyboard final boss battle in burning village save mentor
*/


const dirVectors = {
  "RIGHT": [1, 0],
  "LEFT": [-1, 0],
  "UP": [0, -1],
  "DOWN": [0, 1]
}

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
const crate = "Z"
const ghost = "t"
const spider = "y"
const healingheart = "&"
const warningtile = "!"
const advancetile = "A"
const candle = "]"
const sword = "S"
const water = "B"
const fireball = "C"
const fireshooter = "D"
const chest = "E"
const mentor = "F"
const bridge = "G"


const legendKeys = [
  rooftip,
  roofleft,
  roofright,
  roofoverhangleft,
  roofoverhangright,
  sword,
  player,
  mentor,
  heart,
  door,
  ghost,
  candle,
  fireball,
  fireshooter,
  wall,
  wall2,
  wall3,
  boss,
  mob,
  spider,
  chest,
  hurtplayer,
  spawn,
  grass,
  housewall,
  housewallleft,
  housewallright,
  roofbody,
  housedoor,
  crate,
  healingheart,
  spikes,
  water,
  warningtile,
  advancetile,
]


let legend = new Map();
legendKeys.forEach( (key) => {
  legend.set(key, bitmap`
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
................`)
})



legend.set(rooftip, [rooftip, bitmap`
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
0333333333333330`])
legend.set(roofleft, [roofleft, bitmap`
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
0000000000000000`])
legend.set(roofright, [roofright, bitmap`
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
0000000000000000`])
legend.set(roofoverhangleft, [roofoverhangleft, bitmap`
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
.....00000000000`])
legend.set(roofoverhangright, [roofoverhangright, bitmap`
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
00000000000.....`])
legend.set(heart, [heart, bitmap`
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
.......00.......`])
legend.set(healingheart, [healingheart, bitmap`
..000......000..
.03330....03330.
0333330..0333330
0333333003322330
0333333333332230
0333333333333230
0333333443333330
0333333443333330
.03334444443330.
.03334444443330.
..033334433330..
...0333443330...
....03333330....
.....033330.....
......0330......
.......00.......`]) //heart pickup
legend.set(ghost, [ghost, bitmap`
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
...0...0..0.....`])
legend.set(boss, [boss, bitmap`
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
...DDDD..DDDD...`])
legend.set(mob, [mob, bitmap`
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
................`])
legend.set(spider, [spider, bitmap`
................
................
................
..0...0000...0..
.0.0000000000.0.
....00000000....
...0000000000...
..000000000000..
.0..00000000..0.
....00000000....
...0000000000...
..00.090090.00..
..0..000000..0..
.....0....0.....
....0......0....
................`])
legend.set(hurtplayer, [hurtplayer, bitmap`
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
................`]) //grave
legend.set(candle, [candle, bitmap`
................
................
................
........6.......
.......66.......
.......66.......
......6926......
......6226......
.......CC.......
.......CC.......
.......CC.......
.......CC.......
......0000......
.......CC.......
................
................`])
legend.set(wall, [wall, bitmap`
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
L1111LL1111LL111`])
legend.set(wall2, [wall2, bitmap`
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
1LL1111LL1111LL1`])
legend.set(wall3, [wall3, bitmap`
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
111LL1111LL1111L`])
legend.set(door, [door, bitmap`
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
110CCCCCCCCCC011`])
legend.set(spawn, [spawn, bitmap`
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
7777777777777777`])
legend.set(grass, [grass, bitmap`
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
DDDDDDDDDDDDDDFD`])
legend.set(housewall, [housewall, bitmap`
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
CCCCCCCCCCCCCCCC`])
legend.set(housewallleft, [housewallleft, bitmap`
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
0CCCCCCCCCCCCCCC`])
legend.set(housewallright, [housewallright, bitmap`
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
CCCCCCCCCCCCCCC0`])
legend.set(roofbody, [roofbody, bitmap`
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
0000000000000000`])
legend.set(housedoor, [housedoor, bitmap`
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
CCC0990666660CCC`])
legend.set(crate, [crate, bitmap`
0000000000000000
01CCCCCCCCCCCC10
0CCCCCCCCCCCCCC0
0CC111CCCCCCCCC0
0CCCCC1111CCCCC0
0CCCCCCCCC111CC0
0CC11CCCCCCCCCC0
0CCCC111CCCCCCC0
0CCCCCCC111CCCC0
0CCCCCCCCCC11CC0
0CC11CCCCCCCCCC0
0CCCC111CCCCCCC0
0CCCCCCC11CCCCC0
0CCCCCCCCC11CCC0
01CCCCCCCCCCCC10
0000000000000000`])
legend.set(chest, [chest, bitmap`
....00000000....
...0CCCCCCCC0...
..0CCCCCCCCCC0..
.0CCCCCCCCCCCC0.
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCFFFFCCCCC0
0CCCCCFCCFCCCCC0
01111FFFFFF11110
0CCCCFFCCFFCCCC0
0CCCCFFFFFFCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
01CCCCCCCCCCCC10
0000000000000000`])
legend.set(bridge, [bridge, bitmap`
CC999CC999CC99CC
C1999CC999CC991C
CC999CC999C999CC
CC999CC99CC99CCC
CC999CC99CC99CCC
CC999CC99CC99CCC
CC999CC99CC99CCC
CC999CC99C999CCC
C9999CC9CC999CCC
C9999C99CC999CCC
C9999C99CC999CCC
CC999C99CC999CCC
CC999C99CC999CCC
CC999C99CC999CCC
C1999C99CC999C1C
CC999C99C9999CCC`])
legend.set(water, [water, bitmap`
7777777777777777
7777777777777777
7777757755575777
7755577777757777
7577777777777777
7777777777777777
7777777777777777
7577777777757757
7755557777575577
7777777777777777
7777777777777777
7777777777777777
7777577757775777
7777755577757577
7777777777777777
7777777777777777`])
legend.set(fireball, [fireball, bitmap`
...........3..3.
....3....3.33.3.
....3.3.393.93.3
..3.3.3.3933993.
...393..3933993.
...393.39939993.
...393399939993.
..3993999939993.
..3999999966993.
..3999669666933.
..3996666666933.
..3996666666993.
..399666666693..
..333666336933..
....333333333...
................`])
legend.set(fireshooter, [fireshooter, bitmap`
0000000000000000
01LL00000000LL10
01L0000000000L10
0100000000000010
0100000000000010
0100LLLLLLLL0010
010LLLLLLLLLL010
000LLLLLLLLLL000
00LLLL0000LLLL00
00LLL003300LLL00
00LL00333300LL00
000L00000000L000
010LLL0000LLL010
0100LLLLLLLL0010
0110000000000110
0000000000000000`])
legend.set(spikes, [spikes, bitmap`
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
................`])
legend.set(mentor, [mentor, bitmap`
...........CC...
.........CCCCC..
.....CCCCFCCCC..
....CCCCCCLL....
.....0CCCCCCC...
.....0575CCCCC..
.....015110.....
.....001100.....
......0000......
......0000......
.....000011.....
.....001111.....
.....001111.....
.....011111.....
....11111111....
...11.1.1.111...`])
legend.set(warningtile, [warningtile, bitmap`
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
3333333333333333`])
legend.set(advancetile, [advancetile, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L000000000000L0
0L0LLLLLLLLLL0L0
0L0L00000000L0L0
0L0L0LLLLLL0L0L0
0L0L0L033300L0L0
0L0L0L300030L0L0
0L0L0L000300L0L0
0L0L0L003000L0L0
0L0L0L000000L0L0
0L0L00003000L0L0
0L0LLLLLLLLLL0L0
0L000000000000L0
0LLLLLLLLLLLLLL0
0000000000000000`]) // use for an open world feel in lvls, advancing to a lvl that is not in rotation, but expands upon the prev then goes into rotation


const frames = {
  [player]: {
    
   "LEFT": [player, bitmap`
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
....CC00CC.0000.`],
  "RIGHT": [player, bitmap`
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
.0000.CC00CC....`],
  "UP": [player, bitmap`
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
  "DOWN": [player, bitmap`
................
................
......0000......
.....00LL00.....
.....0LLLL0.....
....006LL600....
....00LLLL00....
.....0LLLL0....1
.....00000C...11
....0000CC00.11.
....000C000011..
...000C000099...
...00CCCCCCL0...
..000000000000..
..000000000000..
.0000CC00CC0000.`]
  },
  [sword]: {
    "RIGHT": [sword, bitmap`
..111...........
..1111..........
....1111........
......1112......
.......112......
........12......
........112.....
........112.....
........11......
........12......
........12......
.......12.......
.......12.......
......112.......
.....1222.......
....1212........`],
    "LEFT": [sword, bitmap`
........2121....
.......2221.....
.......211......
.......21.......
.......21.......
......21........
......21........
......11........
.....211........
.....211........
......21........
......211.......
......2111......
........1111....
..........1111..
...........111..`],
    "UP": [sword, bitmap`
................
................
................
................
................
................
......22........
...22211122.....
...111111112222.
..111......11122
..11.........121
.11...........12
111............1
11..............
11..............
................`],
    "DOWN": [sword, bitmap`
................
..............11
..............11
1............111
21...........11.
121.........11..
22111......111..
.222211111111...
.....22111222...
........22......
................
................
................
................
................
................`]
  }

}
legend.set(player, frames[player].DOWN)
legend.set(sword, frames[sword].DOWN)

setLegend(...legend.values())

const enemyList = ["mob", "ghost", "spider", "fireball"];
const enemyStats = {
  mob: {
    hp: 2
  },
  ghost: {
    hp: 1
  },
  spider: {
    hp: 2
  },
  fireball: {
    hp: 100
  },
};

// Define a function to set the player sprite based on the direction
function setPlayerSprite(direction) {
  legend.set(player, frames[player][direction]);
}


setSolids([wall, wall2, wall3, crate, bridge, housewall, housewallleft, housewallright, roofbody, player, mentor, boss])

const mentorDialogue = 
    ["Slash: i",
     "Turn: j/l",
     "Special: k",
     "\"Be careful,",
     "young one\""]




let level = 1 // starting level (index 1 in this case)
const levels = [ // easy lvls
  // mentor (interior) lvls
  map`
ccccccwAx
ccccccw.x
ccccccw.x
ccccccw.x
ccccccwFx
ccccccw.x
ccccccwpx`,
  //start lvl
  map`
fffffv.vxw
ffffffffff
ffafffffff
jlqzkfffff
feciffffff
feniffffff
ffffffffff
ffpdffffff`,

  // enemy lvls
  map`
xwvdvxw
xw..mxw
x.....w
xm....w
xw...xw
xw...xw
xw.p.xw`, //goblin corridor
  map`
wvxwDxwvx
w......tx
w.$w..w.x
w.....w.x
wG.w..$.x
wGZw..w.x
wvxwvpwdx`,
  map`
vxwvdvxwvx
v........x
vmv.w..v.x
v..xwZx..x
v.......mx
v..Zxw...x
v..Z..v..x
v..vp....x`,
  map`
vxwvxwvxwvxwvxw
vfwdxfffffffffw
vfgfgfffffffffw
vfffffffffffffw
vfggfgggfgffffw
vfffffffffffffw
vfffgfgfffffffw
vfgfffffffffffw
vfffffffffffvfw
vffgfffgfgffvfw
vfffffffffffvfw
vxwvxwvxwvxwvpw`, //ghost graveyard
  map`
wvdDxwvx
w....y.x
w.$.$$.x
w.y....x
w...$$.x
w.$....x
w.$.$.$x
wvxwvpvx`, //spider fire
  map`
wvxwvdvxwv
w...$...yv
w.y......v
w....y...v
wy.......v
G......y.v
G..y.....v
wvxwvpvxwv`,
  map`
wvdvGBv
BG..GBv
BG..ABv
BG..GBv
wvpvxwv`, // water chamber
  map`
BBBBdBBBB
BB.Z.Z.BB
BB.....BB
BB.....BB
BB.....BB
BB..!..BB
BB.....BB
BB..p..BB`, //water boss
  map`
vdvxwvx
BZm...x
BZ....x
B.....x
B.....x
B.y...x
B.....x
Bm....x
B.....x
xwvxwpx`, //crate blocking door LVL 10
  map`
vxwvxpvBBB
vxwBB.BBBB
vxBBB.BBBB
v&Z....BBB
vx.....BBB
vxw....BBB
vxwvxwdxBB`,
]
let traptriggered = false;

const randomPickBlacklist = [
  0,1,9
]

setMap(levels[level]); // only for init

function putGrassUnderRoofs() { // and under the player 
  let grassUnderRoof = getAll(rooftip);
  grassUnderRoof.forEach(rooftip => {
    addSprite(rooftip.x, rooftip.y, grass);
  })

  grassUnderRoof = getAll(roofleft)
  grassUnderRoof.forEach(roofleft => {
    addSprite(roofleft.x, roofleft.y, grass);
  })
  grassUnderRoof = getAll(roofright)
  grassUnderRoof.forEach(roofright => {
    addSprite(roofright.x, roofright.y, grass);
  })
  grassUnderRoof = getAll(roofoverhangleft)
  grassUnderRoof.forEach(roofoverhangleft => {
    addSprite(roofoverhangleft.x, roofoverhangleft.y, grass);
  })
  grassUnderRoof = getAll(roofoverhangright)
  grassUnderRoof.forEach(roofoverhangright => {
    addSprite(roofoverhangright.x, roofoverhangright.y, grass);
  })

  addSprite(2, 7, grass);



}
putGrassUnderRoofs() // and under the player

function putGrassGraveyardLvl() {

  let tombstones = getAll(hurtplayer);
  tombstones.forEach(hurtplayer => {
    addSprite(hurtplayer.x, hurtplayer.y, grass);
  })


}

function levelSpecificStuff() {
  //decorative
    if (level === 5) { // index 5 is gy lvl
    putGrassGraveyardLvl();
    }
    if (level === 4 || level === 7) {
    addSprite(width()-1,4,candle);
    addSprite(4,0,candle);
    addSprite(0,3,candle);
    }
    if (level === 2) {
      addSprite(width()-2,4,candle);
      addSprite(1,4,candle);
    }
    if (level === 10) {
      addSprite(width()-1,4,candle);
        addSprite(width()-1,6,candle);
    }
 /*  if (level < 9) {
let decowall = getAll(wall2);
     for (let i = 0; i < 3; i++) {
    let rngpick = Math.floor(Math.random() * decowall.length)
    addSprite(decowall[rngpick].x,decowall[rngpick].y,candle);
    rngpick = Math.floor(Math.random() * decowall.length)
    } */ // rng picking thing for candles
    
  
}


//sfx and music
const hit = tune`
500: C4/500 + B4/500 + C5/500 + D5~500 + B5^500,
15500`
const hitEnemy = tune`
209.7902097902098,
104.8951048951049: C5~104.8951048951049 + B4^104.8951048951049 + C4/104.8951048951049 + G4/104.8951048951049 + B5/104.8951048951049,
3041.958041958042`
const killEnemy = tune`
104.8951048951049,
104.8951048951049: C4/104.8951048951049,
104.8951048951049: C5~104.8951048951049 + B4^104.8951048951049 + C4/104.8951048951049 + G4/104.8951048951049 + B5/104.8951048951049,
104.8951048951049: F5/104.8951048951049,
104.8951048951049: E5^104.8951048951049,
104.8951048951049,
104.8951048951049: C5^104.8951048951049,
104.8951048951049: A4^104.8951048951049,
2517.4825174825173`
const cratebreak = tune`
124.48132780082987: F4-124.48132780082987 + G4-124.48132780082987 + D4-124.48132780082987 + E4-124.48132780082987 + A4-124.48132780082987,
124.48132780082987: G4-124.48132780082987 + D4-124.48132780082987 + C4-124.48132780082987,
3734.4398340248963`
const gameoversound = tune`
78.3289817232376: B5-78.3289817232376 + C4~78.3289817232376 + F4~78.3289817232376,
78.3289817232376: A5-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: G5-78.3289817232376 + C4~78.3289817232376 + F4~78.3289817232376,
78.3289817232376: F5-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: E5-78.3289817232376 + C4~78.3289817232376 + F4~78.3289817232376,
78.3289817232376: D5-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: C5-78.3289817232376 + C4~78.3289817232376 + F4~78.3289817232376,
78.3289817232376: B4-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: A4-78.3289817232376 + C4~78.3289817232376 + F4~78.3289817232376,
78.3289817232376: G4-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: F4-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: E4-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: D4-78.3289817232376 + C4~78.3289817232376,
78.3289817232376: C4-78.3289817232376 + B5~78.3289817232376 + B4~78.3289817232376,
1409.9216710182768`
const danger = tune`
161.29032258064515,
161.29032258064515: F5-161.29032258064515 + D5-161.29032258064515,
161.29032258064515: G5/161.29032258064515 + C5/161.29032258064515 + A5/161.29032258064515 + B5/161.29032258064515 + B4/161.29032258064515,
161.29032258064515: B4/161.29032258064515 + C5/161.29032258064515 + D5/161.29032258064515 + E5/161.29032258064515 + F5/161.29032258064515,
4516.129032258064`
const heal = tune`
223.88059701492537: C4~223.88059701492537,
223.88059701492537: A4~223.88059701492537 + C4~223.88059701492537 + E4^223.88059701492537,
223.88059701492537: C5~223.88059701492537 + C4~223.88059701492537 + E5^223.88059701492537,
6492.537313432836`
const slash = tune`
94.33962264150944,
94.33962264150944: E5~94.33962264150944,
94.33962264150944: B5^94.33962264150944 + E5^94.33962264150944 + G5^94.33962264150944 + F5^94.33962264150944 + A5^94.33962264150944,
2735.8490566037735`

const advancelvl = tune`
118.57707509881423: C4-118.57707509881423,
118.57707509881423: C4-118.57707509881423,
118.57707509881423: C4-118.57707509881423,
3438.735177865613`

const villagebgm = tune`
238.0952380952381: C4~238.0952380952381,
238.0952380952381: D4~238.0952380952381,
238.0952380952381: E4~238.0952380952381 + C5~238.0952380952381,
238.0952380952381,
238.0952380952381: C4~238.0952380952381,
238.0952380952381: D4~238.0952380952381,
238.0952380952381: E4~238.0952380952381 + D5~238.0952380952381,
238.0952380952381,
238.0952380952381: C5~238.0952380952381 + G4^238.0952380952381 + C4^238.0952380952381,
238.0952380952381: D5~238.0952380952381,
238.0952380952381,
238.0952380952381: G4~238.0952380952381,
238.0952380952381: C5~238.0952380952381 + F4^238.0952380952381,
238.0952380952381: E5~238.0952380952381,
238.0952380952381: G4^238.0952380952381,
238.0952380952381: G4~238.0952380952381,
238.0952380952381,
238.0952380952381: C4~238.0952380952381 + G4~238.0952380952381 + F4^238.0952380952381,
238.0952380952381,
238.0952380952381: A4~238.0952380952381 + C5~238.0952380952381,
238.0952380952381: B4~238.0952380952381,
238.0952380952381: C4^238.0952380952381 + D4~238.0952380952381 + F4~238.0952380952381 + A4~238.0952380952381,
238.0952380952381,
238.0952380952381: C4~238.0952380952381 + E4~238.0952380952381 + G4~238.0952380952381,
238.0952380952381,
238.0952380952381: F4^238.0952380952381,
238.0952380952381: C4~238.0952380952381 + G4~238.0952380952381,
238.0952380952381: F4^238.0952380952381,
238.0952380952381: C4~238.0952380952381 + G4^238.0952380952381,
238.0952380952381: G4~238.0952380952381 + B4^238.0952380952381,
238.0952380952381,
238.0952380952381: C4~238.0952380952381 + C5~238.0952380952381`
const hardbgm = tune`
476.1904761904762: A5-476.1904761904762 + C5-476.1904761904762 + B4^476.1904761904762 + C4/476.1904761904762,
476.1904761904762: B5-476.1904761904762 + C5-476.1904761904762 + B4^476.1904761904762 + D4^476.1904761904762 + C4^476.1904761904762,
476.1904761904762: C5-476.1904761904762 + A5-476.1904761904762 + B4^476.1904761904762 + C4/476.1904761904762,
476.1904761904762: G5-476.1904761904762 + C5-476.1904761904762 + B4^476.1904761904762 + D4^476.1904761904762 + C4^476.1904761904762,
476.1904761904762: A5-476.1904761904762 + C5-476.1904761904762 + B4^476.1904761904762 + C4/476.1904761904762,
476.1904761904762: F5-476.1904761904762 + C5-476.1904761904762 + B4^476.1904761904762 + D4^476.1904761904762 + C4^476.1904761904762,
476.1904761904762: E5-476.1904761904762 + C5-476.1904761904762 + B4^476.1904761904762 + C4/476.1904761904762,
476.1904761904762: C4/476.1904761904762 + B4^476.1904761904762 + C5-476.1904761904762,
476.1904761904762: D4-476.1904761904762 + C4-476.1904761904762 + B4/476.1904761904762,
476.1904761904762: F5~476.1904761904762 + B5/476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4~476.1904761904762,
476.1904761904762: F5~476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4/476.1904761904762 + B5~476.1904761904762,
476.1904761904762: F5~476.1904761904762 + B5/476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4~476.1904761904762,
476.1904761904762: F5~476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4/476.1904761904762 + B5~476.1904761904762,
476.1904761904762: F5~476.1904761904762 + B5/476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4~476.1904761904762,
476.1904761904762: F5~476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4/476.1904761904762 + B5~476.1904761904762,
476.1904761904762: F5^476.1904761904762 + B5/476.1904761904762 + C4~476.1904761904762 + C5~476.1904761904762 + B4~476.1904761904762,
476.1904761904762: C4/476.1904761904762 + B4/476.1904761904762 + C5/476.1904761904762 + B5/476.1904761904762,
476.1904761904762: A5-476.1904761904762 + G5^476.1904761904762 + D4^476.1904761904762 + C4^476.1904761904762 + B4^476.1904761904762,
476.1904761904762: B5-476.1904761904762 + A5^476.1904761904762 + C4/476.1904761904762 + B4~476.1904761904762,
476.1904761904762: A5-476.1904761904762 + G5^476.1904761904762 + C4^476.1904761904762 + D4^476.1904761904762 + B4^476.1904761904762,
476.1904761904762: G5-476.1904761904762 + F5^476.1904761904762 + C4/476.1904761904762 + B4~476.1904761904762,
476.1904761904762: A5-476.1904761904762 + G5^476.1904761904762 + C4^476.1904761904762 + D4^476.1904761904762 + B4^476.1904761904762,
476.1904761904762: F5-476.1904761904762 + E5^476.1904761904762 + C4/476.1904761904762 + B4~476.1904761904762,
476.1904761904762: E5-476.1904761904762 + D5^476.1904761904762 + C4^476.1904761904762 + D4^476.1904761904762 + B4^476.1904761904762,
476.1904761904762: C4^476.1904761904762 + B5~476.1904761904762 + A4/476.1904761904762 + C5/476.1904761904762 + B4/476.1904761904762,
476.1904761904762: B4/476.1904761904762 + A4/476.1904761904762 + C4^476.1904761904762,
476.1904761904762: B4/476.1904761904762 + A4/476.1904761904762 + C4^476.1904761904762 + B5~476.1904761904762,
476.1904761904762: B4/476.1904761904762 + A4/476.1904761904762 + C4^476.1904761904762,
476.1904761904762: A4/476.1904761904762 + G4/476.1904761904762 + C4^476.1904761904762 + B5~476.1904761904762,
476.1904761904762: B4/476.1904761904762 + C5/476.1904761904762 + G4/476.1904761904762 + F4/476.1904761904762 + C4^476.1904761904762,
476.1904761904762: B4/476.1904761904762 + G4/476.1904761904762 + F4/476.1904761904762 + C4^476.1904761904762 + D5/476.1904761904762,
476.1904761904762: B4/476.1904761904762 + G4/476.1904761904762 + F4/476.1904761904762 + C4-476.1904761904762 + C5/476.1904761904762`


let bgm = playTune(villagebgm, Infinity);

setPushables({
  [player]: [crate],
    [crate]: [mob],
})


let gameOver = false;

let currentPlayerType = player;
let plr = getFirst(currentPlayerType);
let playerDir = "DOWN";
let score = 0; // tracking when to change difficulty
let mapJustChanged = true;

// mob difficulties (changable through game perhaps)


let damageincrement = 1 // init only

let maxhealth = 3;
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

function levelOneSet() {
  addText("mentor", { 
  x: 2,
  y: 9,
  color: color`0`
})
}
levelOneSet() // init, call whenever returning

async function tutorialCutscene() {
  function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
  
for (let i = 0; i < mentorDialogue.length-2; i++) {
addText(mentorDialogue[i], {x:1,y:3+i,color:color`0`})
await wait(400)
}
addText(mentorDialogue[3], {x:1,y:8,color:color`0`})
addText(mentorDialogue[4], {x:1,y:9,color:color`0`})
getFirst(mentor).y = getFirst(mentor).y+2
}

let chosenLevels = [];
// random pick blacklist defined under map bitmaps

function resetMap(n) {
  if (arguments.length === 0) 
    level = Math.floor(Math.random() * levels.length); // random level above safe ones 
  else {
    level = n;
    setMap(levels[level])
  }
  // idea: random range increases as score increases - maybe add score to lvl length
if (arguments.length === 0) {
  if (level === 0 || level === 1 || chosenLevels.includes(level) || randomPickBlacklist.includes(level)) { // add more lvlvs as scrollers added 
    resetMap() //recursively call until its a dungeon lvl
  }
}

  console.log("Level: " + level);
  console.log("Score: " + score);

  mapJustChanged = true;

  if (!chosenLevels.includes(level))
    score++;
  
  setMap(levels[level]);
  chosenLevels.push(level);
  
  createHeartsArray(health);
  plr = getFirst(player);

  
  playTune(advancelvl);

  traptriggered = false;
  
  addSprite(plr.x, plr.y, spawn); //spawn pad under player
  levelSpecificStuff();
  clearText();
  

}

var tempXToPreventSpawnSafetyAbuse;
var tempYToPreventSpawnSafetyAbuse;

function preventSpawnAbuse() {
  tempXToPreventSpawnSafetyAbuse = plr.x
  tempYToPreventSpawnSafetyAbuse = plr.y
}

onInput("s", () => {
  if (!gameOver) {
    preventSpawnAbuse();
    playerDir = "DOWN";
    mapJustChanged = false;
    plr.y += 1; // Move the player down
  }
});
onInput("w", () => {
  if (!gameOver) {
    preventSpawnAbuse();
    playerDir = "UP";
    mapJustChanged = false;

    plr.y -= 1; // Move the player up
  }
});
onInput("a", () => {
  if (!gameOver) {
    preventSpawnAbuse();
    playerDir = "LEFT";
    mapJustChanged = false;

    plr.x -= 1; // Move the player left
  }
});
onInput("d", () => {
  if (!gameOver) {
    preventSpawnAbuse();

    playerDir = "RIGHT";

    mapJustChanged = false;

    plr.x += 1; // Move the player right
  }
});

let cooldown = false;
let interacting = false;
onInput("i", () => {
  // tryInteract();
  let tempspawn = getFirst(spawn);
  if (!gameOver && !cooldown && !interacting) {
    if (playerDir === "RIGHT") {
        legend.set(sword, frames[sword].RIGHT)
      let swing = addSprite(plr.x+1, plr.y, sword)
            playTune(slash);
    }
    if (playerDir === "LEFT") {
        legend.set(sword, frames[sword].LEFT)
        let swing = addSprite(plr.x-1, plr.y, sword)
            playTune(slash);
    }
    if (playerDir === "UP") {
    legend.set(sword, frames[sword].UP)
    let swing = addSprite(plr.x, plr.y-1, sword)
            playTune(slash);
    }
        if (playerDir === "DOWN") {
    legend.set(sword, frames[sword].DOWN)
    let swing = addSprite(plr.x, plr.y+1, sword)
                playTune(slash);
    }
    cooldown = true;

    //attack
  
  const swordPosition = tilesWith(sword);
  console.log(swordPosition)
  // Find sprites at the sword's position
  const collisionSprites = getTile(swordPosition.x, swordPosition.y);



// Function to handle sword attack on an enemy target
function handleSwordAttack(enemy) {
    console.log("found enemy at sword pos");
  // Apply damage to the enemy based on its type
  switch (enemy.type) {
    case mob:
      enemy.hp -= 1; // Decrease mob's HP by 1
      break;
    case ghost:
      enemy.hp -= 2; // Decrease ghost's HP by 2
      break;
    // Add cases for other enemy types as needed
  }

  // Check if enemy's HP reaches 0
  if (enemy.hp <= 0) {
    defeatEnemy(enemy); // Handle defeated enemy
  }
}

    
    setTimeout(() => {
    cooldown = false;
    getFirst(sword).remove();
}, 200);
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

    plr = getFirst(currentPlayerType);
    plr.x = 2;
    plr.y = 7;
    playerDir = "DOWN";

    gameOver = false;
  } else { // turn player 90 deg
      let tempdir = playerDir 
      if (tempdir === "UP") {
          playerDir = "LEFT"
      }
      else if (tempdir === "LEFT") {
        playerDir = "DOWN"
      }
      else if (tempdir === "RIGHT") {
          playerDir = "UP"
      }
      if (tempdir === "DOWN") {
        playerDir = "RIGHT"
    }
  }
});

onInput("l", () => {
    let tempdir = playerDir 
      if (tempdir === "UP") {
          playerDir = "RIGHT"
      }
      else if (tempdir === "LEFT") {
        playerDir = "UP"
      }
      else if (tempdir === "RIGHT") {
          playerDir = "DOWN"
      }
      if (tempdir === "DOWN") {
        playerDir = "LEFT"
    }
})

onInput("k", () => {
  resetMap(11)
})

afterInput(() => {
  const doorSprite = getFirst(door);
  const houseDoor = getFirst(housedoor);
  const bossSprite = getFirst(boss);
  const healingHeart = getFirst(healingheart)
  const spawnSprite = getFirst(spawn)

  legend.set(player, frames[player][playerDir]);
  setLegend(...legend.values());
  
  if (getAll(door).length > 0 && plr.x === doorSprite.x && plr.y === doorSprite.y) {
    resetMap(); // Load the next level (mob levels)
  }
  if (getAll(housedoor).length > 0 && plr.x === houseDoor.x && plr.y === houseDoor.y) {
    level = 0;
    setMap(levels[0]);
    clearText()
    plr = getFirst(currentPlayerType);
  } 
  if (level === 0 && plr.x === 7 && plr.y === 5) {
    console.log("tutorial")
    tutorialCutscene();
  }


  //heal 
if (healingHeart)
  if (plr.x === healingHeart.x && plr.y === healingHeart.y)
    gainHealth();

  let crates = getAll(crate); // destroy on mob hit
  let waterSprites = getAll(water);
  let mobSprites = getAll(mob); // collision via player movement check
  let spikeSprites = getAll(spikes);
  let ghostSprites = getAll(ghost);
  let spiderSprites = getAll(spider);
  let fireballSprites = getAll(fireball)


if (mobSprites) {
//modify pushable sprites
crates.forEach(crate => {
  mobSprites.forEach(mobSprite => {
    if (crate.x === mobSprite.x && crate.y === mobSprite.y) {
      crate.remove();
      playTune(cratebreak);
    }
  });
});
}
  
crates.forEach(crate => {
  if (crate.x === doorSprite.x && crate.y === doorSprite.y) {
      crate.remove();
      playTune(cratebreak);
  }
});
  
crates.forEach(crate => {
  waterSprites.forEach(water => {
    if (crate.x === water.x && crate.y === water.y) {
      crate.remove();
      playTune(cratebreak);
    }
  });
});

if (spawnSprite) {
if (plr.x === spawnSprite.x && plr.y === spawnSprite.y && mapJustChanged === false) {
    plr.x = tempXToPreventSpawnSafetyAbuse;
    plr.y = tempYToPreventSpawnSafetyAbuse;
}
}
    //attack
  
  mobSprites.forEach(mob => {
    if (plr.x === mob.x && plr.y === mob.y)
      playerCollided();
  })
  
  ghostSprites.forEach(ghost => {
    if (plr.x === ghost.x && plr.y === ghost.y)
      playerCollided();
  })
  
  spiderSprites.forEach(spider => {
    if (plr.x === spider.x && plr.y === spider.y)
      playerCollided();
  })
  for (let i = 0; i < spikeSprites.length; i++) {
    if (plr.x === spikeSprites[i].x && plr.y === spikeSprites[i].y) {
      stillDamage();
    }
  for (let i = 0; i < fireballSprites.length; i++) {
    if (plr.x === fireballSprites[i].x && plr.y === fireballSprites[i].y) {
      playerCollided();
    }
  }
  }
  waterSprites.forEach(watersprite => {
    if (plr.x === watersprite.x && plr.y === watersprite.y)
      playerCollided();

  })

  //lvl traps

if (level === 5 && plr.x === width() - 2 && plr.y === 8 && !traptriggered ) {
  let graves = getAll(hurtplayer)
  traptriggered = true;
  
  graves.forEach(grave => {
      playTune(danger);
      
      addSprite(grave.x,grave.y,ghost)
  })
}
  
  //doors for specific lvls levelspecific stuff
const portal = getFirst(advancetile);
if (portal && plr.x === portal.x && plr.y === portal.y) {
  if (level === 8) { // water realm
    resetMap(9)
  }
}
  
});

let mobCounter = 0;
let ghostCounter = 0; 
let spiderCounter = 0; 


var moveMobsInterval = setInterval(mobMoveAll, 750);
var moveGhostInterval = setInterval(ghostMoveAll, 1000);
var moveSpiderInterval = setInterval (spiderMoveAll, 500);

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
    1
    let newY = mobSprite.y;

    // Calculate the next position based on the random direction
  function moveLogic() {
    if (direction === "up") {
      newY -= 1;
    } else if (direction === "down") {
      newY += 1;
    } else if (direction === "left") {
      newX -= 1;
    } else if (direction === "right") {
      newX += 1;
    }
  }
    moveLogic();
    // Check for wall collision and player exclusion
    const spritesAtNextPos = getTile(newX, newY);
    const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, wall3, bridge, water, fireshooter, spikes, crate, chest, fireshooter, fireball, mob, spider, ghost, heart, spawn, door].includes(sprite.type));
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);

    // Move the mob sprite only if there is no wall collision and not colliding with the player
    if (!isWallCollision && !isPlayerCollision) {
      mobSprite.x = newX;
      mobSprite.y = newY;
    } else if (isWallCollision) {
      function wallCollisionStuff() {
      randomIndex = Math.floor(Math.random() * options.length);
      direction = options[randomIndex];
      moveLogic();
      if (!isWallCollision) {
        mobSprite.x = newX;
        mobSprite.y = newY;
      } 
      else if (isWallCollision)
        wallCollisionStuff();
      }
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
function moveLogic() {
    if (direction === "up") {
      newY -= 1;
    } else if (direction === "down") {
      newY += 1;
    } else if (direction === "left") {
      newX -= 1;
    } else if (direction === "right") {
      newX += 1;
    }
}
moveLogic();
    
    // Check for wall collision and player exclusion
    const spritesAtNextPos = getTile(newX, newY);
    const isWallCollision = spritesAtNextPos.some(sprite => [mob, spider, ghost, heart, spawn, door, chest].includes(sprite.type)); // GHOSTS r special (they can go thru walls)
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);

    // Move the mob sprite only if there is no wall collision and not colliding with the player
    if (!isWallCollision && !isPlayerCollision) {
      ghostSprite.x = newX;
      ghostSprite.y = newY;
    } else if (isWallCollision) {
      function wallCollisionGhost() {
      randomIndex = Math.floor(Math.random() * options.length);
      direction = options[randomIndex];
      moveLogic();
      if (!isWallCollision) {
        ghostSprite.x = newX;
        ghostSprite.y = newY;
      } 
      else if (isWallCollision)
        wallCollisionGhost();
      }
    } else if (isPlayerCollision) {
      ghostSprite.x = newX;
      ghostSprite.y = newY;
      playerCollided()
    }
  });

}

function spiderMoveAll() {
  let spiderSprites = getAll(spider);

  spiderSprites.forEach(spiderSprite => {
    if (!spiderSprite.moveRight) {
      spiderSprite.x--; // Move left
    } else {
      spiderSprite.x++; // Move right
    }

    const spritesAtNextPos = getTile(spiderSprite.x, spiderSprite.y);
    const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, wall3, bridge, water, chest, crate, heart, fireball, mob, ghost, spikes].includes(sprite.type));
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);

    if (isWallCollision) {
      spiderSprite.moveRight = !spiderSprite.moveRight; // Change direction if wall collision
      if (spiderSprite.moveRight) {
        spiderSprite.x++; // Move right after changing direction
      } else {
        spiderSprite.x--; // Move left after changing direction
      }
    } else if (isPlayerCollision) {
      playerCollided();
    }
  });
}

function fireShoot() {
  let fireShooters = getAll(fireshooter);

  fireShooters.forEach(fiya => {
    addSprite(fiya.x, fiya.y, fireball);
    let fireproj = getFirst(fireball);
    const spritesAtNextPos = getTile(fireproj.x, fireproj.y+1);
    const isWallCollision = spritesAtNextPos.some(sprite => [wall, wall2, wall3, heart, spawn, door, crate, chest, spider, mob, ghost, spikes].includes(sprite.type));
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);
    
    if (!isWallCollision && !isPlayerCollision)
      fireproj.y++;
    
    if (isWallCollision) 
      fireproj.remove()
  
    if (isPlayerCollision) {
      fireproj.y++;
      playerCollided()
      fireproj.remove()
    }
  });
}

setInterval(fireShoot, 500);


function defeatEnemy(enemy) {
  console.log("enemy defeated")
  enemy.remove();
    playTune(killEnemy);

}

function gainHealth() {
  if (health < maxhealth) {  
      health++;
      playTune(heal)
      handleHealthUI(health);
      createHeartsArray(health);
      getFirst(healingheart).remove();
  } else {
    addText("max health: " + maxhealth, {
      x: (width() / 2),
      y: 3,
      color:color`3`
    })
    setTimeout(() => {
    clearText();
    }, 2000);

  }
}

function playerCollided() { //collide with normal mob
  let plr = getFirst(player)
  const spawnSprite = getFirst(spawn)
  console.log("Collided: " + plr.x + ", " + plr.y) 
  
  health--;
  handleHealthUI(health);
  createHeartsArray(health);
  
  playTune(hit);
  
  checkGameOver()
  

  plr.x = spawnSprite.x;
  plr.y = spawnSprite.y;

  console.log("Spawn position: " + spawnSprite.x + ", " + spawnSprite.y) 
  console.log("Reinitalize to spawn: " + plr.x + ", " + plr.y) // does not work on spawn x= 0; sprig bug?
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
    const plrgrave = addSprite(plr.x, plr.y, hurtplayer);
    plr.remove();
    gameOver = true;
    
    bgm.end()
    playTune(gameoversound);

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

