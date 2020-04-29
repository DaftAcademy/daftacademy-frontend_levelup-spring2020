import { SLIDES_COUNT, lerp, getRndInteger } from "../utils.js";

const colorArray = [
  [171, 4, 242],
  [124, 7, 242],
  [81, 7, 242],
  [34, 216, 183],
  [214, 242, 4]
]

const slideArray = [
  [
    [200, 200, 800, colorArray[0]],
    [900, 900, 800, colorArray[1]],
    [1600, 400, 800, colorArray[2]]
  ],
  [
    [200, 800, 800, colorArray[1]],
    [900, 300, 800, colorArray[2]],
    [1600, 200, 800, colorArray[3]]
  ],
  [
    [200, 200, 800, colorArray[2]],
    [900, 300, 800, colorArray[3]],
    [1600, 400, 800, colorArray[4]]
  ]
]

let currentAlpha = 0
let previousAlpha = 0
let currentSlide = 0

const canvas = document.getElementById('canvas')
const title = document.getElementById('title')

const ctx = canvas.getContext('2d')

const drawGradient = ({x, y}, radius, color) => {
  const grad = ctx.createRadialGradient(x, y, 0, x, y, radius)
  grad.addColorStop(0, color)
  grad.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = grad
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
}

const drawBackground = (index, alpha = 1) => {
  index < 0 && (index = SLIDES_COUNT)

  const currentBg = slideArray[index]
  currentBg.forEach(([x, y, radius, colors]) => {
    const [r, g, b] = colors
    drawGradient({x, y}, radius, `rgba(${r},${g},${b},${alpha})`)
  })
}

  // const drawTitleBackground = () => {
  //   title.style.backgroundImage = `url('${canvas.toDataURL('image/jpeg')}')`
  // }

const draw = () => {
  canvas.setAttribute('width', window.innerWidth)
  canvas.setAttribute('height', window.innerHeight)

  previousAlpha = lerp(previousAlpha, 0)
  currentAlpha = lerp(currentAlpha, 1)

  drawBackground(currentSlide - 1, previousAlpha)
  drawBackground(currentSlide, currentAlpha)

  // drawTitleBackground()

  requestAnimationFrame(() => draw(ctx, canvas))
}

draw()

export const handleCanvasAnimation = slideIndex => {
  currentSlide = slideIndex

  currentAlpha = 0
  previousAlpha = 1
}

