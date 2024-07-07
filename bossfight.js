/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: noxi
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const boss = "b"
const wall = "w"
const wall2 = "v"
const wall3 = "x"
const door = "d"

setLegend(
  [ player, bitmap`
.......LL.......
.....LLLLLL.....
....LLLLLLLL....
....L..LL..L....
....L.0..0.L....
.....L.00.L.....
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

setSolids([wall, wall2, wall3, player])

let level = 0
const levels = [
  map`
xwvdvxw
xw...xw
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
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})


afterInput(() => {
  const playerSprite = getFirst(player)
  const doorSprite = getFirst(door)
  const bossSprite = getFirst(boss)

  if (playerSprite.x === doorSprite.x && playerSprite.y === doorSprite.y) {
    level = level + 1;
    setMap(levels[level]); // Load the next level
  }

  // if level is boss lvl, load hp bar text
  
  if (playerSprite.x === bossSprite.x && playerSprite.y === bossSprite.y) {
    // Deal dmg?
    setMap(levels[level]); // Check if player hit the boss
  }
  
})
