export default function WallCollision(ballObj, canvas, player, paddleProps) {
  if (ballObj.y + ballObj.rad >= canvas.height) {
    player.lives--
    ballObj.x = canvas.width / 2
    ballObj.y = canvas.height / 2
    ballObj.dy = 0.4
    ballObj.dx = 0
    if (
      ballObj.x < paddleProps.x + paddleProps.width &&
      ballObj.x > paddleProps.x &&
      paddleProps.y < paddleProps.y + paddleProps.height &&
      ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
    ) {
      let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2)

      collidePoint = collidePoint / (paddleProps.width / 2)

      let angle = (collidePoint * Math.PI) / 3

      ballObj.dx = (ballObj.speed * Math.sin(angle)) / 2
      ballObj.dy = (-ballObj.speed * Math.cos(angle)) / 2
    }
  }
  if (ballObj.y - ballObj.rad <= 0) {
    ballObj.dy = ballObj.dy * -1
  }
  if (ballObj.x - ballObj.rad <= 0 || ballObj.x + ballObj.rad >= canvas.width) {
    ballObj.dx = ballObj.dx * -1
  }
}
