/*
@title: Spriglite
@author: noxi
@tags: [advanced, dungeon]
@addedOn: 2024-07-07
*/

/* ABOUT:

Explore a procedurally generated dungeon, defeat enemies, upgrade your gear, and find a way to the core of the planet. 

*/


/* bulletin 
    dash attack

   chests
   
   boss attack pattern
   boss rush mode
   able to attack bosses


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
const mobboss = "b"
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
const mobspawner = "H"
const mobegg = "I"
const invincibility = "J"
const bossslash = "K"

const lockeddoor = "L"
const hppotion = "M"
const curse = "O"
const none = "N"

const legendKeys = [
  rooftip,
  roofleft,
  roofright,
  roofoverhangleft,
  roofoverhangright,
  bossslash,
  sword,
  invincibility,

  hppotion,
  curse,

  player,
  mentor,
  heart,
  door,
  lockeddoor,
  mobegg,
  ghost,
  candle,
  fireball,
  fireshooter,
  wall,
  wall2,
  wall3,
  mobboss,
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
  mobspawner,
  none,
]


let legend = new Map();
legendKeys.forEach((key) => {
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
legend.set(mobboss, [mobboss, bitmap`
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
legend.set(bossslash, [bossslash, bitmap`
..............00
....2....222000.
....2222220000..
...22.220000..22
..202.20000..22.
.2..002000..2.2.
.2..00000..2..2.
.2..0000..2..2..
.2.2000.022..2..
...0000000..2...
..000000...2....
.00000....22....
.00...0.......22
000...0....222..
00......222.....
0...............`])
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
legend.set(mobegg, [mobegg, bitmap`
................
......0000......
....00DDDD00....
...0DDDDDDD40...
...0DDDDDDDD0...
...0DDD4DDDD0...
..0DDD44DDDDD0..
..0DDD44DDDDD0..
..0DDDDDDD4DD0..
..0DDDDDD44DD0..
..0DD4DDD4DDD0..
..0DD44DDDDDD0..
..0DDD4DDDDDD0..
...0DDDDDDDD0...
....0DDDDDD0....
.....000000.....`])
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
legend.set(lockeddoor, [lockeddoor, bitmap`
L01616LCCL61610L
0L6L616FF616L6L0
L61LL11FF11LL16L
166LL111111LL661
6L161100001161L6
L61L60CCCC06L16L
6L1L06CCCC60L1L6
1610CC6666CC0161
6L10CC6CC6CC01L6
6L6CC666666CC6L6
L60666666666606L
616CC6612660C616
LL0CC666666CC0LL
660CC666666CC066
L60C6CCCCCC6C06L
1166CCCCCCCC6611`])
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
legend.set(mobspawner, [mobspawner, bitmap`
DDDDDDDD4DDDDDDD
DDD1LL1411LL1DDD
D1DDL41L41LLDD1D
D11DDL4L41LDD44D
DLL11D4441D444LD
DLL1LLDDDDL41L44
DL44LDCCC4DL14LD
D144DC447CCD411D
DL44DCC7CC4D4LLD
DL44DC4007CD1LLD
DLL1DCC770CD1LLD
D11D4CC74CCDD11D
DLDD147C74C1DDLD
DDD14LCCC7441DDD
DDL44L1DD1L44LDD
DDDDDDDDDDDDDDDD`])
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
legend.set(invincibility, [invincibility, bitmap`
..777777777777..
.7.2........2.7.
7.2.........22.7
72.............7
72.............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
.7............7.
..777777777777..`])
legend.set(none, [none, bitmap`
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
................`])
legend.set(hppotion, [hppotion, bitmap`
................
......0000......
....00099000....
...0111991110...
...0...11...0...
....000..000....
.....0....0.....
...0003333000...
..003333322300..
.00333333323300.
.03333334333330.
.03323344433330.
.00323334333300.
..032333333330..
..002233333300..
....00000000....`])
legend.set(curse, [curse, bitmap`
......0000......
....00....00....
..00LL66666606..
..0LL666666330..
..0L6336663333..
..0L3333366333..
..603333663333..
..663333366333..
..663333663333..
..666333366336..
..666633666636..
..666666666666..
..633336333366..
..366636366363..
..363336366636..
..663666333663..`])

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
  },


}


const items = [
  { type: "none", id: 0 },
  { type: "hppotion", id: 1 },
  { type: "curse", id: 2 },
]



legend.set(player, frames[player].DOWN)
legend.set(sword, frames[sword].DOWN)


setLegend(...legend.values())

const enemyList = ["mob", "ghost", "spider", "fireball"];
/* const enemyStats = {
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
}; */

const breakablesArray = getAll(mobegg)

// function to set the player sprite based on the direction
function setPlayerSprite(direction) {
  legend.set(player, frames[player][direction]);
}


setSolids([wall, wall2, wall3, fireshooter, crate, bridge, housewall, housewallleft, housewallright, roofbody, player, mentor, mobboss, mobegg])

const mentorDialogue = [
  "Move: w,a,s,d",
  "Sword: i,j,l",
  "Item: k",
  "Face enemies,",
  "collect items,",
  "grow stronger."
]




let level = 1 // starting level (index 1 in this case)
const levels = [ // easy lvls, possibly create a seperate array for next difficulties
  // mentor (interior) lvls
  map`
ccccccccc
ccccccccc
cccccciAe
cccccci.e
cccccciFe
cccccci.e
ccccccipe`,

  map`
fffffv.vxw
ffffffffff
ffafffffff
jlqzkfffff
feciffffff
feniffffff
ffffffffff
ffpdffffff`, //start

  // enemy lvls
  map`
xwvdvxw
xwfmmxw
xff...w
xfm.m.w
xw...xw
xw...xw
xw.p.xw`, //goblin corridor
  map`
wvxwDxwvx
w......tx
w.$w..w.x
w.t...w.x
wG.w..$.x
wGZw..w.x
wvxwvpwdx`,
  map`
wvdvxwvx
wt.....x
w.$.$$.x
w$....tx
w...$$.x
w.$....x
w.$t$.$x
wvxwvpvx`,
  map`vxwvxwvxwvxwvxw
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
wdxDxwvx
w...$$$x
w$$.$$$x
w$$....x
w$$.$$$x
w$$....x
w$$.$.$x
wvxwvpvx`,
  map`
wvxwvdvxwv
vv....y.vv
w.y......v
w....y...v
wy.......v
w......y.v
wv.y....vv
wvxwvpvxwv`, // spiders lots
  map`
wvdDGBv
BG..GBv
BG..ABv
BG..GBv
wvpvxwv`,
  map`
BBtvdvtBB
BB.....BB
BB..M..BB
BB.....BB
BBt...tBB
BB.....BB
BB.....BB
BB..p..BB`, // hp pot chamber

  map`
vdvvwvx
BZ.m.Zx
BZ...Zx
BZ....x
H.....x
v....Zx
B....vx
B...Z.x
Bm..ZZx
xwvxwpx`, // 10  spawenr of mobs crates
  map`
vxwvxpvBBB
vxwBB.BBBB
vxBBB.BBBB
v&Z....BBB
vx.....BBB
vxw....BBB
vxwvxwdxBB`, //heart pickup
  map`
GGGGGGGGGG
vxwvxpv.GB
vxwm...mBB
vx...m..BB
vH......BB
vx......BB
vxw....GBB
vxwvxwdGGG`, //  spawner of mobs smaller chamber
  map`
vxwdxwv
vt...tv
v.t.t.v
v.....v
vxw.xwv
vm...mv
v.m.m.v
v..m..v
v.....v
v..p..v`, // double static chamber


  //bosses
  map`
xwvxwLxwvxw
x.........w
x....b....w
x.........w
x.........w
x.........w
x.........w
xwvxwpxwvxw`, // first boss; levels.length

]
let traptriggered = false;

const randomPickBlacklist = [
  0, 1, 9
]

setMap(levels[level]); // only for init
let heldItem;

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
  if (level === 5) { // index 5 is gy lvl, but its sometimes 4??
    putGrassGraveyardLvl();
  }
  if (level === 4 || level === 7) {
    addSprite(width() - 1, 4, candle);
    addSprite(4, 0, candle);
    addSprite(0, 3, candle);
  }
  if (level === 2) {
    addSprite(width() - 2, 4, candle);
    addSprite(1, 4, candle);
  }
  if (level === 10) {
    addSprite(width() - 1, 4, candle);
    addSprite(width() - 1, 6, candle);
  }
  if (level === 13) {
    addSprite(2, 4, candle);
    addSprite(4, 4, candle);
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
const killBoss = tune`
211.26760563380282: G4-211.26760563380282 + B4-211.26760563380282 + D5-211.26760563380282 + F5-211.26760563380282,
211.26760563380282: F5-211.26760563380282 + D5-211.26760563380282 + B4-211.26760563380282 + G4-211.26760563380282,
211.26760563380282: D5-211.26760563380282 + G4-211.26760563380282 + B4-211.26760563380282 + F5-211.26760563380282,
211.26760563380282: F5-211.26760563380282 + D5-211.26760563380282 + B4-211.26760563380282 + G4-211.26760563380282,
211.26760563380282: F5-211.26760563380282 + B4-211.26760563380282,
211.26760563380282: G5-211.26760563380282 + C5-211.26760563380282,
211.26760563380282,
211.26760563380282: G5/211.26760563380282 + C5/211.26760563380282 + E5/211.26760563380282 + G4/211.26760563380282 + C4/211.26760563380282,
5070.422535211268`
const enemySpawn = tune`
112.78195488721805: B4^112.78195488721805 + C4^112.78195488721805 + G4^112.78195488721805 + E5^112.78195488721805,
112.78195488721805: D4^112.78195488721805 + A4^112.78195488721805 + C5~112.78195488721805 + F5^112.78195488721805,
112.78195488721805: E4^112.78195488721805 + B4^112.78195488721805 + E5^112.78195488721805,
3270.6766917293235`
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
const getItem = tune`
89.55223880597015,
89.55223880597015: A4~89.55223880597015 + B4^89.55223880597015,
89.55223880597015: C5^89.55223880597015 + E5^89.55223880597015,
2597.0149253731342`

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
476.1904761904762: C5-476.1904761904762 + A5-476.1904761904762 + B4^476.1904761904762 + C4/476.1904761904762 + B5-476.1904761904762,
476.1904761904762: G5-476.1904761904762 + B4^476.1904761904762 + D4^476.1904761904762 + C4^476.1904761904762 + A5-476.1904761904762,
476.1904761904762: A5-476.1904761904762 + B4^476.1904761904762 + C4/476.1904761904762 + G5-476.1904761904762,
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

let bgm = playTune(villagebgm, Infinity); // init

function playbgm() { // plays bgm appropriate to lvl
  let currentbgm;
  if (level === 14) {
    bgm.end();
    bgm = playTune(hardbgm, Infinity)
  }


}



// (if boss level, play hard bgm)

setPushables({
  [player]: [crate],
  [crate]: [mob],
  [invincibility]: [mob]
})


let gameOver = false;

let currentPlayerType = player;
let plr = getFirst(currentPlayerType);
let playerDir = "DOWN";
let score = 0; // tracking when to change difficulty (init 0)
let mapJustChanged = true;

// mob difficulties (changable through game perhaps)




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

function levelOneSetDeco() {
  putGrassUnderRoofs();
  addText("mentor", {
    x: 2,
    y: 9,
    color: color`0`
  })
}
levelOneSetDeco() // init, call whenever returning

let tutorialPlayed = false;
async function tutorialCutscene(tutorialPlayed) {
  function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  if (!tutorialPlayed) {
    for (let i = 0; i < mentorDialogue.length - 3; i++) {
      addText(mentorDialogue[i], { x: 1, y: 3 + i, color: color`0` })
      await wait(350)
    }
    addText(mentorDialogue[3], { x: 1, y: 8, color: color`0` })
    addText(mentorDialogue[4], { x: 1, y: 9, color: color`0` })
    addText(mentorDialogue[5], { x: 1, y: 10, color: color`0` })
    getFirst(mentor).y = getFirst(mentor).y + 2
    tutorialPlayed = true;
  }
}

let chosenLevels = [];
// random pick blacklist defined under map bitmaps

function resetMap(n) {
  if (arguments.length === 0)
    level = (Math.floor(Math.random() * levels.length / 2) + score); // random level above safe ones 
  else {
    level = n;
    setMap(levels[level])
  }
  // idea: random range increases as score increases - maybe add score to lvl length
  if (arguments.length === 0) {
    if (chosenLevels.includes(level) || randomPickBlacklist.includes(level)) { // add more lvlvs as scrollers added 
      resetMap() //recursively call until its a dungeon lvl
    }
  }

  console.log("Level: " + level);
  console.log("Score: " + score);

  mapJustChanged = true;

  if (!chosenLevels.includes(level))
    score++;

  chosenLevels.push(level)

  setMap(levels[level]);

  playbgm()

  createHeartsArray(health);
  plr = getFirst(player);


  playTune(advancelvl);

  traptriggered = false;

  addSprite(plr.x, plr.y, spawn); //spawn pad under player
  levelSpecificStuff();


  clearText();

  if (itemSprite)
    itemSprite = addSprite(0, 0, heldItem)


}

var tempXToPreventSpawnSafetyAbuse = 0;
var tempYToPreventSpawnSafetyAbuse = 0;

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
    movementDown = true;
  }
});
onInput("w", () => {
  if (!gameOver) {
    preventSpawnAbuse();
    playerDir = "UP";
    mapJustChanged = false;

    plr.y -= 1; // Move the player up
    movementDown = true;
  }
});
onInput("a", () => {
  if (!gameOver) {
    preventSpawnAbuse();
    playerDir = "LEFT";
    mapJustChanged = false;

    plr.x -= 1; // Move the player left
    movementDown = true;
  }
});
onInput("d", () => {
  if (!gameOver) {
    preventSpawnAbuse();

    playerDir = "RIGHT";

    mapJustChanged = false;

    plr.x += 1; // Move the player right
    movementDown = true;
  }

});

let cooldown = false; // init
let cooldownTime = 400 // init; can get smaller
let interacting = false; // init
function basicAttack() {
  let yOffset = 0;
  let xOffset = 0

  if (!gameOver && !cooldown && !interacting) {
    if (playerDir === "RIGHT") {
      legend.set(sword, frames[sword].RIGHT)
      xOffset = 1;
      yOffset = 0;
    }
    if (playerDir === "LEFT") {
      legend.set(sword, frames[sword].LEFT)
      xOffset = -1;
      yOffset = 0;
    }
    if (playerDir === "UP") {
      legend.set(sword, frames[sword].UP)
      xOffset = 0;
      yOffset = -1;
    }
    if (playerDir === "DOWN") {
      legend.set(sword, frames[sword].DOWN)
      xOffset = 0;
      yOffset = 1;

    }
    playTune(slash);
    let swing = addSprite(plr.x + xOffset, plr.y + yOffset, sword)


    //attack with hp? not working tho

    /* if (!cooldown) {
    // Check for collisions with enemies
    const collisionX = getFirst(sword).x 
    const collisionY = getFirst(sword).y
    const collisionSprites = getTile(collisionX, collisionY);
    collisionSprites.forEach(sprite => {
      if (enemyList.includes(sprite) && sprite.x === collisionX && sprite.y === collisionY) {
        handleSwordAttack(sprite);
      }
    }); */

    // Reset cooldown and remove sword
    cooldown = true;
    setTimeout(() => {
      getFirst(sword).remove();
      setTimeout(() => {
        cooldown = false;
      }, cooldownTime)
    }, 100);


  }

}
onInput("i", () => {
  // tryInteract();
  // let tempspawn = getFirst(spawn);
  basicAttack()
  movementDown = false;

});


// Function to handle sword attack on an enemy target
/* function handleSwordAttack(enemy) {
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
} */


onInput("j", () => { // RESET game if game over is on
  if (gameOver) {
    initGame();
  } else { // turn player 90 deg
    let tempdir = playerDir
    if (tempdir === "UP") {
      playerDir = "LEFT"
      basicAttack();
    } else if (tempdir === "LEFT") {
      playerDir = "DOWN"
      basicAttack();
    } else if (tempdir === "RIGHT") {
      playerDir = "UP"
      basicAttack();
    }
    if (tempdir === "DOWN") {
      playerDir = "RIGHT"
      basicAttack();
    }
    plr.x = plr.x
    plr.y = plr.y
  }
});

onInput("l", () => {
  let tempdir = playerDir
  if (tempdir === "UP") {
    playerDir = "RIGHT"
    basicAttack();

  } else if (tempdir === "LEFT") {
    playerDir = "UP"
    basicAttack();
  } else if (tempdir === "RIGHT") {
    playerDir = "DOWN"
    basicAttack();
  }
  if (tempdir === "DOWN") {
    playerDir = "LEFT"
    basicAttack();
  }
  plr.x = plr.x
  plr.y = plr.y
  movementDown = false;
})

onInput("k", () => {

  resetMap(9) // for debug
  movementDown = false;

  if (heldItem) {}
})

function useItem() {
  //heal if hp pot
}

var movementDown = false; // init

function checkIfOnSpawnPos() {
  if (getFirst(spawn) && getFirst(player).x === getFirst(spawn).x && getFirst(player).y === getFirst(spawn).y) {
    plr.x = tempXToPreventSpawnSafetyAbuse;
    plr.y = tempYToPreventSpawnSafetyAbuse;
    return false;
  } else {
    return true;
  }
}


afterInput(() => {
  const doorSprite = getFirst(door);
  const houseDoor = getFirst(housedoor);
  const gobBossSprite = getFirst(mobboss);

  let healingHeart = getFirst(healingheart);



  const spawnSprite = getFirst(spawn)
  let crates = getAll(crate); // destroy on mob hit
  let waterSprites = getAll(water);
  let spikeSprites = getAll(spikes);
  let mobSprites = getAll(mob); // collision via player movement chec
  let ghostSprites = getAll(ghost);
  let spiderSprites = getAll(spider);
  let fireballSprites = getAll(fireball)
  let attacki = getFirst(sword);
  let mobEggs = getAll(mobegg);

  checkIfOnSpawnPos()
  checkCollisionforFireBalls()

  legend.set(player, frames[player][playerDir]);
  setLegend(...legend.values());

  if (level === 0) {
    if (plr.x === 7 && plr.y === 5) {
      console.log("tutorial")
      tutorialPlayed = true;
      tutorialCutscene();

    }
    if (plr.x === getFirst(advancetile).x && plr.y === getFirst(advancetile).y) {
      clearText();
      resetMap();
      setTimeout(() => { clearText(); }, 50)
      setTimeout(() => { addText("I: Surface", { x: 4, y: 3, color: color`8` }) }, 100)

      setTimeout(() => { clearText() }, 2000)
    }
  } // tutorial and mentor
  if (doorSprite) {
    if (plr.x === doorSprite.x && plr.y === doorSprite.y) {
      resetMap(); // Load the next level (mob levels)
    }
  }

  if (getAll(housedoor).length > 0 && plr.x === houseDoor.x && plr.y === houseDoor.y) {
    level = 0;
    setMap(levels[0]);
    clearText()
    plr = getFirst(currentPlayerType);
  }


  if (invincible) {
    getFirst(invincibility).remove();
    addSprite(plr.x, plr.y, invincibility);
  } else {
    let invinciblestuff = getAll(invincibility)
    invinciblestuff.forEach(e => { e.remove(); })
  }


  // item

  //heal 
  if (healingHeart) {
    if (plr.x === healingHeart.x && plr.y === healingHeart.y)
      gainHealth();
  }
  plr = getFirst(player)




  waterSprites.forEach(watersprite => {
    if (plr.x === watersprite.x && plr.y === watersprite.y)
      playerCollided();
  })



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

  spikeSprites.forEach(spike => {
    if (plr.x === spike.x && plr.y === spike.y && movementDown) {
      if (plr.x != tempXToPreventSpawnSafetyAbuse || plr.y != tempYToPreventSpawnSafetyAbuse) {
        stillDamage();
        movementDown = false;
      }
    }
  });

  if (gobBossSprite) {
    if (attacki.x === gobBossSprite.x && attacki.y === gobBossSprite.y)
      gobBossHp--;
    if (gobBossHp <= 0) {
      defeatBoss(gobBossSprite)
      let eggstoclear = getAll(mobegg)
      eggstoclear.forEach(e => { e.remove() })
    }
  }

  if (level === 5 && plr.x === width() - 2 && plr.y === 8 && !traptriggered) {
    let graves = getAll(hurtplayer)
    traptriggered = true;

    graves.forEach(grave => {
      playTune(danger);

      addSprite(grave.x, grave.y, ghost)
    })
  }

  //doors for specific lvls levelspecific stuff
  const portal = getFirst(advancetile);
  plr = getFirst(player);
  if (portal && plr.x === portal.x && plr.y === portal.y) {
    if (level === 8) { // water realm
      resetMap(9)
    }
  }



  //attack from mobs
  // mobs below here bc glitchy
  if (mobSprites) {
    mobSprites.forEach(mob => {
      if (plr.x === mob.x && plr.y === mob.y) {
        playerCollided();
      }
    })
    if (attacki) {
      mobSprites.forEach(mob => {
        if (attacki.x === mob.x && attacki.y === mob.y) {
          defeatEnemy(mob)
        }
      })
    }
  }

  if (ghostSprites) {
    ghostSprites.forEach(ghost => {
      if (plr.x === ghost.x && plr.y === ghost.y) {
        playerCollided();
      }
    })
    if (attacki) {
      ghostSprites.forEach(ghost => {
        if (attacki.x === ghost.x && attacki.y === ghost.y) {
          defeatEnemy(ghost)
        }
      })
    }
  }

  if (spiderSprites) {
    spiderSprites.forEach(spider => {
      if (plr.x === spider.x && plr.y === spider.y) {
        playerCollided();
      }
    })
    if (attacki) {
      spiderSprites.forEach(spider => {
        if (attacki.x === spider.x && attacki.y === spider.y) {
          defeatEnemy(spider)
        }
      })
    }
  }

  if (mobEggs) {
    mobEggs.forEach(egg => {
      if (attacki.x === egg.x && attacki.y === egg.y)
        defeatEnemy(egg)
    })
  }

  const hpPotion = getFirst(hppotion);
  if (hpPotion) {
    if (plr.x === hpPotion.x && plr.y === hpPotion.y) {
      addItem(hppotion)
      hpPotion.remove();
    }
  }

  if (itemSprite)
    itemSprite.remove();
  if (heldItem)
    itemSprite = addSprite(0, 0, heldItem)
})


//lvl traps



//fireball checking (and other projectiles)
function checkCollisionforFireBalls() {
  let fireballSprites = getAll(fireball)
  fireballSprites.forEach(fireball => {
    if (getFirst(player).x === fireball.x && getFirst(player).y === fireball.y) {
      playerCollided();
    }
  });
}






let mobCounter = 0;
let ghostCounter = 0;
let spiderCounter = 0;


var moveMobsInterval = setInterval(mobMoveAll, 750);
var spawnMobsInterval = setInterval(mobSpawn, 1500);
var moveGhostInterval = setInterval(ghostMoveAll, 1000);
var moveSpiderInterval = setInterval(spiderMoveAll, 500);


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
    const isWallCollision = spritesAtNextPos.some(sprite => [hppotion, curse, mobegg, wall, wall2, wall3, bridge, water, fireshooter, spikes, crate, chest, fireshooter, fireball, mob, spider, ghost, heart, spawn, door].includes(sprite.type));
    const isPlayerCollision = spritesAtNextPos.some(sprite => sprite.type === player);
    3

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
        } else if (isWallCollision)
          wallCollisionStuff();
      }
    } else if (isPlayerCollision) {
      mobSprite.x = newX;
      mobSprite.y = newY;
      playerCollided()
    }
  });

}

var itemSprite; //init
function addItem(pickup) {
  if (heldItem === undefined) {
    playTune(getItem);
    heldItem = pickup

  } else if (heldItem) {
    console.log('capacity max')
    addText("capacity full", {
      x: 4,
      y: 4,
      color: color`3`
    })
  }
  itemSprite = addSprite(0, 0, pickup)
}

function mobSpawn() {
  let mobSpawner = getAll(mobspawner);
  mobSpawner.forEach(s => {
    const spritesAtNextPos = getTile(s.x + 1, s.y);
    const isWallCollision = spritesAtNextPos.some(sprite => [hppotion, curse, mob, spider, ghost, player].includes(sprite.type));
    if (!isWallCollision) {
      addSprite(s.x, s.y, mob)
      playTune(enemySpawn);
    }
  })
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
    const isWallCollision = spritesAtNextPos.some(sprite => [mob, spider, ghost, spikes, heart, spawn, door, chest].includes(sprite.type)); // GHOSTS r special (they can go thru walls)
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
        } else if (isWallCollision)
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
    const spritesAtNextPos = getTile(fireproj.x, fireproj.y + 1);
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

let eggCount = 0; // init
let eggOpenTime = 700; // init
let gobBossHp = 18; // init
let gobBossEnraged = false; // init
async function goblinBossAttack() {
  let gobBoss = getFirst(mobboss);
  let choice;
  if (gobBossHp < 10) {
    gobBossEnraged = true;
  }
  if (gobBoss) {
    const options = ["surroundXaoe", "eggSummon", "sideaoe"];
    let randomIndex = Math.floor(Math.random() * options.length);

    choice = options[randomIndex];

    if (choice === "surroundXaoe") {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 3; j++) {
          addSprite(gobBoss.x + i, gobBoss.y + j, warningtile);
          1
        }
      }
      addSprite(gobBoss.x - 2, gobBoss.y, warningtile);
      addSprite(gobBoss.x - 2, gobBoss.y + 1, warningtile);
      addSprite(gobBoss.x + 2, gobBoss.y, warningtile);
      addSprite(gobBoss.x + 2, gobBoss.y + 1, warningtile);
      if (gobBossEnraged) {
        addSprite(gobBoss.x - 2, gobBoss.y - 1, warningtile);
        addSprite(gobBoss.x + 2, gobBoss.y - 1, warningtile);
        addSprite(gobBoss.x, gobBoss.y + 3, warningtile);
      }
      setTimeout(() => {
        startslashing("down", 45);
      }, 1000);
    }
    if (choice === "eggSummon") {
      let xchoices = [2, 3, 4, 6, 7, 8]
      let ychoices = [3, 4]

      let randomx = Math.floor(Math.random() * xchoices.length)
      let randomy = Math.floor(Math.random() * ychoices.length)

      if (eggCount < 6) {
        addSprite(xchoices[randomx], ychoices[randomy], mobegg)
        eggCount++;
        addSprite(xchoices[randomx], ychoices[randomy], mobegg)
        eggCount++;

        if (gobBossEnraged) { // harder after 50% hp
          randomx = Math.floor(Math.random() * xchoices.length)
          randomy = Math.floor(Math.random() * ychoices.length)
          addSprite(xchoices[randomx], ychoices[randomy], mobegg)
          eggCount++;
          eggOpenTime = 500;
        }
      }
      if (eggCount > 0) {
        setTimeout(() => {
          let egg = getFirst(mobegg)
          addSprite(egg.x, egg.y, mob)
          egg.remove();
        }, eggOpenTime)
        eggCount--;
      }
    }
    if (choice === "sideaoe") {
      for (let i = 1; i < 3; i++) {
        for (let j = 1; j < 7; j++) {
          addSprite(i, j, warningtile);
        }
      }
      for (let i = 8; i < 10; i++) {
        for (let j = 1; j < 7; j++) {
          addSprite(i, j, warningtile);
        }
      }
      addSprite(3, height() - 2, warningtile)
      addSprite(7, height() - 2, warningtile)
      addSprite(3, height() - 3, warningtile)
      addSprite(7, height() - 3, warningtile)
      addSprite(4, height() - 2, warningtile)
      addSprite(6, height() - 2, warningtile)
      setTimeout(() => {
        startslashing("down", 25)
        if (gobBossEnraged) { sideslashsecondattack() }
      }, 900)
    }
  }
}

function startslashing(dir, delayBetweenSlashMs) {
  let slashanimInterval = setInterval(slashWarningTiles, delayBetweenSlashMs)
  let runcount = 0
  slashWarningTiles()

  function slashWarningTiles() {
    let mapheight = height()
    let warningtiles = getAll(warningtile)
    if (dir === "down") {
      warningtiles.forEach(tile => {

        if (tile.y === runcount) {
          addSprite(tile.x, tile.y, bossslash)
          playTune(slash)
          tile.remove();
          let slashes = getAll(bossslash)
          slashes.forEach(s => {
            if (plr.x === s.x && plr.y === s.y) {
              clearAllSlashes();
              playerCollided();
            }

            if (s.y + 1 === runcount)
              s.remove();
          })
        }
      })
      runcount++;

      if (runcount >= mapheight) {
        runcount = 0;
        clearInterval(slashanimInterval)
        clearAllSlashes();
      }
    }
    if (dir === "up") {
      let cc = (mapheight - runcount);
      warningtiles.forEach(tile => {

        if (tile.y === cc) {
          addSprite(tile.x, tile.y, bossslash)
          playTune(slash)
          tile.remove();
          let slashes = getAll(bossslash)
          slashes.forEach(s => {
            if (plr.x === s.x && plr.y === s.y) {
              clearAllSlashes();
              playerCollided();
            }

            if (s.y - 1 === runcount)
              s.remove();
          })
        }
      })
      runcount++;
      if (cc <= 0) {
        runcount = 0;
        clearInterval(slashanimInterval)
        clearAllSlashes();
      }
    }

  }
}

function sideslashsecondattack() {
  setTimeout(() => {
    for (let i = 2; i < 7; i++) {
      addSprite(4, i, warningtile);
    }
    for (let i = 2; i < 7; i++) {
      addSprite(6, i, warningtile);
    }
    setTimeout(() => { startslashing("up", 50); }, 500)

  }, 150);
}

function clearAllSlashes() {
  let slashes = getAll(bossslash)
  slashes.forEach(s => {
    s.remove();
  })
}

setInterval(goblinBossAttack, 2000)


function defeatEnemy(enemy) {
  enemy.remove();
  playTune(killEnemy);
}

function defeatBoss(boss) {
  boss.remove()

  let exit = getFirst(lockeddoor)
  addSprite(exit.x, exit.y, door) // heal player after defeated boss
  exit.remove();

  let attackwarners = getAll(warningtile)
  let slashes = getAll(bossslash)
  attackwarners.forEach(tile => { tile.remove() })
  slashes.forEach(s => { s.remove(); })
  playTune(killEnemy);
  bgm.end();
  playTune(killBoss);
  //getFirst(door.. ) replace with thing)
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
      color: color`3`
    })
    setTimeout(() => {
      clearText();
    }, 2000);

  }
}

let invincible = false;

function playerCollided() { //collide with normal mob
  if (!invincible) {


    invincible = true;
    health--;
    handleHealthUI(health);
    createHeartsArray(health);
    checkGameOver() // to get best grave placement
    playTune(hit);


    if (!gameOver) {
      setTimeout(() => {
        if (playerDir === "RIGHT") {
          plr.x--;
          addSprite(plr.x, plr.y, invincibility);
        }
        if (playerDir === "LEFT") {
          plr.x++;
          addSprite(plr.x, plr.y, invincibility);
        }
        if (playerDir === "UP") {
          plr.y++;
          addSprite(plr.x, plr.y, invincibility);
        }
        if (playerDir === "DOWN") {
          plr.y--;
          addSprite(plr.x, plr.y, invincibility);
        }
      }, 75);
    }


    // getFirst(player).x = spawnSprite.x;
    // getFirst(player).y = spawnSprite.y;


    cooldown = true;
    setTimeout(() => {
      cooldown = false;
    }, 200);
    setTimeout(() => {
      invincible = false;
      getFirst(invincibility).remove();
    }, 1000);
  }
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
    if (getFirst(invincibility))
      getFirst(invincibility).remove();

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

let damageincrement = 1 // init


function initGame() { //  used for restart after death
  level = 1

  setMap(levels[level]);
  clearText();
  levelOneSetDeco();


  health = maxhealth;
  heartsArray = [];


  plr = getFirst(currentPlayerType);
  plr.x = 2;
  plr.y = 7;
  playerDir = "DOWN";

  gameOver = false;

  //reset buffs
  damageincrement = 1
  cooldown = false; // init
  cooldownTime = 400 // init; can get smaller
  interacting = false; // init

  // reset bosses stats
  eggCount = 0;
  eggOpenTime = 2500;
  gobBossHp = 12;
}
