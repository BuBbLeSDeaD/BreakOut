import data from '../../../data'
export default function AllLifeGone(player, ballObj, canvas, bricks) {
  let { brickObj } = data
  if (player.lives === 0) {
    alert(
      'YOU LOST ... ITNA AASAM GAME NHI JEETA GYA CHOMU!!!!! DOBARA KHEL !!!'
    )
    {
      player.lives = 5
      player.level = 1
      player.score = 0
      brickObj.y = 50
      ballObj.x = canvas.width / 2
      ballObj.y = canvas.height / 2
      ballObj.dx = 0
      ballObj.dy = 0.4
      bricks.length = 0
    }
  }
}
