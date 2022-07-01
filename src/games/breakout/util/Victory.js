export default function Victory(player, canvas, ballObj) {
  if (player.level > 5) {
    alert('JEET GYA !!! JEET GYA')
    player.level = 1
    ballObj.x = canvas.width / 2
    ballObj.y = canvas.height / 2
    ballObj.dx = 0
    ballObj.dy = 0.4
    player.lives = 5
    player.score = 0
  }
}
