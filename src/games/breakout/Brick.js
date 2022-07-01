export default function Brick(level, bricks, canvas, brick) {
  brick.width = (canvas.width - 70) / 6
  let newBricks = []
  if (!bricks) {
    return []
  }
  if (bricks.length >= 6 * level) {
    return
  }

  for (let i = 0; i < 6 * level; i++) {
    let newBrick = new SingleBrick(
      brick.x + brick.width + 10,
      brick.y,
      brick.width,
      brick.height,
      brick.color
    )
    newBricks.push(newBrick)

    brick.x += brick.width + 10

    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 10
    }
  }
  console.log(newBricks)
  return newBricks
}

class SingleBrick {
  constructor(x, y, w, h, c) {
    this.x = x - w
    this.y = y
    this.width = w
    this.height = h
    this.colors = c
    this.broke = false
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.broke ? 'blue' : 'red'
    ctx.strokeStyle = this.broke ? 'blue' : 'red'
    ctx.lineWidth = 5
    ctx.fillstyle = this.broke ? 'blue' : 'red'
    ctx.shadowBlur = 0
    ctx.shadowColor = 'blue'
    ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.fill()
  }
}
