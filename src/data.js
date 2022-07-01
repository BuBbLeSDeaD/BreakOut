export default {
  ballObj: {
    x: 363,
    y: 735,
    dx: 0,
    dy: 0.4,
    rad: 10,
    speed: 0.5,
  },
  brickObj: {
    x: 0.5,
    y: 50,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ['blue', 'Lightblue'],
    broke: false,
  },
  player: {
    name: 'BuBbLeS',
    lives: 6,
    score: 0,
    level: 1,
  },
  paddleProps: {
    height: 20,
    width: 100,
    x: 100,
    color: 'orange',
  },
}
