import React, { useEffect, useRef } from 'react'
import { BallMovement } from './BallMovement'

import data from '../../data'
import WallCollision from './util/WallCollision'
import Paddle from './Paddle'
import Brick from './Brick'
import BrickCollision from './util/BrickCollision'
import PaddleHit from './util/PaddleHit'
import PlayerStats from './PlayerStats'
import AllBroken from './util/AllBroke'
import AllLifeGone from './util/AllLifeGone'
import Victory from './util/Victory'

let { ballObj, paddleProps, brickObj, player } = data

let bricks = []

export default function Board() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      paddleProps.y = canvas.height - 30
      ballObj.speed = 4

      let newBrickSet = Brick(player.level, bricks, canvas, brickObj)

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      PlayerStats(ctx, player, canvas)

      bricks.forEach((brick) => {
        return brick.draw(ctx)
      })

      BallMovement(ctx, ballObj)

      AllBroken(bricks, player, canvas, ballObj)

      AllLifeGone(player, ballObj, canvas, bricks)

      WallCollision(ballObj, canvas, player, paddleProps)

      let collision
      for (let i = 0; i < bricks.length; i++) {
        collision = BrickCollision(ballObj, bricks[i])

        if (collision.hit && !bricks[i].broke) {
          if (collision.axis === 'X') {
            ballObj.dx *= -1
            bricks[i].broke = true
          } else if (collision.axis === 'Y') {
            ballObj.dy *= -1
            bricks[i].broke = true
          }
          player.score += 10
        }
      }

      Paddle(ctx, canvas, paddleProps)

      Victory(player, canvas, ballObj)

      PaddleHit(ballObj, paddleProps)

      requestAnimationFrame(render)
    }
    render()
  }, [])
  return (
    <canvas
      id='canvas'
      ref={canvasRef}
      onMouseMove={(event) =>
        (paddleProps.x = event.clientX - paddleProps.width / 2)
      }
      height={window.innerHeight - 20}
      width={window.innerWidth - 20}
    />
  )
}
