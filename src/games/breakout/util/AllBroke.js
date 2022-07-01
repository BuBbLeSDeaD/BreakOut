import data from '../../../data'
export default function AllBroken(bricks, player, canvas, ballObj) {
  let { brickObj } = data
  let total = 0
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) total++
  }
  if (total === bricks.length) {
    alert('SAARI TODD DI BHAI !!!!!')
    player.level++
    brickObj.y = 50
    ballObj.x = canvas.width / 2
    ballObj.y = canvas.height / 2
    ballObj.dx = 0
    ballObj.dy = 0.4
  }
}
