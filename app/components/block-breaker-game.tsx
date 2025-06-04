"use client"

import { useEffect, useRef, useState } from "react"

const COLOR = "#FFFFFF"
const HIT_COLOR = "#333333"
const BACKGROUND_COLOR = "#000000"
const BALL_COLOR = "#FFFFFF"
const PADDLE_COLOR = "#FFFFFF"
const LETTER_SPACING = 1
const WORD_SPACING = 3

// Game states
enum GameState {
  WAITING = "waiting",
  PLAYING = "playing",
  GAME_OVER = "game_over",
  WON = "won"
}

const PIXEL_MAP = {
  P: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  R: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  O: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  S: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
  ],
  C: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 1],
  ],
  K: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  X: [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  Z: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  F: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  J: [
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  "'": [
    [0, 1],
    [1, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
}

interface Pixel {
  x: number
  y: number
  size: number
  hit: boolean
}

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  initialSpeed: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
}

interface BlockBreakerGameProps {
  onGameWon: () => void
  onGameOver: () => void
  resetTrigger: number
}

export function BlockBreakerGame({ onGameWon, onGameOver, resetTrigger }: BlockBreakerGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pixelsRef = useRef<Pixel[]>([])
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0, initialSpeed: 0 })
  const paddleRef = useRef<Paddle>({ x: 0, y: 0, width: 0, height: 0 })
  const scaleRef = useRef(1)
  const animationFrameId = useRef<number | null>(null)
  const [gameState, setGameState] = useState<GameState>(GameState.WAITING)
  const gameInitializedRef = useRef(false)

  // Initialize game only once or when reset
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000)
      initializeGame()
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      const LARGE_PIXEL_SIZE = 3 * scale
      const SMALL_PIXEL_SIZE = 2 * scale
      const BALL_SPEED = 6 * scale

      pixelsRef.current = []
      const words = ["SEMAJ'S", "PORTFOLIO"]

      const calculateWordWidth = (word: string, pixelSize: number) => {
        return (
          word.split("").reduce((width, letter) => {
            const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
            return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
          }, 0) -
          LETTER_SPACING * pixelSize
        )
      }

      const totalWidthLarge = calculateWordWidth(words[0], LARGE_PIXEL_SIZE)
      const totalWidthSmall = words[1]
        ? words[1].split(" ").reduce((width, w, index) => {
            return width + calculateWordWidth(w, SMALL_PIXEL_SIZE) + (index > 0 ? WORD_SPACING * SMALL_PIXEL_SIZE : 0)
          }, 0)
        : 0
      const totalWidth = Math.max(totalWidthLarge, totalWidthSmall)
      const scaleFactor = (canvas.width * 0.5) / totalWidth

      const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor
      const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor

      const largeTextHeight = 5 * adjustedLargePixelSize
      const smallTextHeight = words[1] ? 5 * adjustedSmallPixelSize : 0
      const calculatedSpaceBetweenLines = words[1] ? 5 * adjustedLargePixelSize : 0
      const totalTextHeight = largeTextHeight + calculatedSpaceBetweenLines + smallTextHeight

      let startY = (canvas.height - totalTextHeight) / 3

      words.forEach((word, wordIndex) => {
        const pixelSize = wordIndex === 0 ? adjustedLargePixelSize : adjustedSmallPixelSize
        let currentWordTotalWidth = 0

        if (wordIndex === 0) {
          currentWordTotalWidth = calculateWordWidth(word, adjustedLargePixelSize)
        } else if (words[1]) {
          currentWordTotalWidth = words[1].split(" ").reduce((width, w, index) => {
            return (
              width +
              calculateWordWidth(w, adjustedSmallPixelSize) +
              (index > 0 ? WORD_SPACING * adjustedSmallPixelSize : 0)
            )
          }, 0)
        }
        
        let startX = (canvas.width - currentWordTotalWidth) / 2

        if (wordIndex === 1 && words[1]) {
          words[1].split(" ").forEach((subWord) => {
            subWord.split("").forEach((letter) => {
              const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
              if (!pixelMap) return

              for (let i = 0; i < pixelMap.length; i++) {
                for (let j = 0; j < pixelMap[i].length; j++) {
                  if (pixelMap[i][j]) {
                    const x = startX + j * pixelSize
                    const y = startY + i * pixelSize
                    pixelsRef.current.push({ x, y, size: pixelSize, hit: false })
                  }
                }
              }
              startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
            })
            startX += WORD_SPACING * adjustedSmallPixelSize
          })
        } else if (wordIndex === 0) {
          word.split("").forEach((letter) => {
            const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
            if (!pixelMap) return

            for (let i = 0; i < pixelMap.length; i++) {
              for (let j = 0; j < pixelMap[i].length; j++) {
                if (pixelMap[i][j]) {
                  const x = startX + j * pixelSize
                  const y = startY + i * pixelSize
                  pixelsRef.current.push({ x, y, size: pixelSize, hit: false })
                }
              }
            }
            startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
          })
        }

        // Update startY for the next line only if there is a next line
        if (wordIndex === 0 && words[1]) {
          startY += largeTextHeight + calculatedSpaceBetweenLines;
        }
      })

      const paddleWidth = 10 * adjustedLargePixelSize
      const paddleHeight = adjustedLargePixelSize

      paddleRef.current = {
        x: (canvas.width - paddleWidth) / 2,
        y: canvas.height - paddleHeight * 2,
        width: paddleWidth,
        height: paddleHeight,
      }

      ballRef.current = {
        x: canvas.width / 2,
        y: paddleRef.current.y - adjustedLargePixelSize / 2 - 10,
        dx: 0, // Start with no movement
        dy: 0, // Start with no movement
        radius: adjustedLargePixelSize / 2,
        initialSpeed: BALL_SPEED,
      }

      // Store the initial ball speed for when game starts
      ballRef.current.initialSpeed = BALL_SPEED
      
      setGameState(GameState.WAITING)
      gameInitializedRef.current = true
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [resetTrigger]) // Only re-run when resetTrigger changes

  // Separate effect for game loop and controls
  useEffect(() => {
    if (!gameInitializedRef.current) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleMouseMove = (event: MouseEvent) => {
      if (gameState !== GameState.PLAYING && gameState !== GameState.WAITING) return
      const newPaddleX = event.clientX - paddleRef.current.width / 2
      paddleRef.current.x = Math.max(0, Math.min(canvas.width - paddleRef.current.width, newPaddleX))
      
      // If waiting, move ball with paddle
      if (gameState === GameState.WAITING) {
        ballRef.current.x = paddleRef.current.x + paddleRef.current.width / 2
      }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault()
        if (gameState === GameState.WAITING) {
          // Start the ball movement
          const ball = ballRef.current
          ball.dx = ball.initialSpeed * (Math.random() > 0.5 ? 1 : -1)
          ball.dy = -ball.initialSpeed
          setGameState(GameState.PLAYING)
        }
      }
    }

    const updateGame = () => {
      if (gameState !== GameState.PLAYING) return

      const ball = ballRef.current
      const paddle = paddleRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      // Wall collision (top, left, right)
      if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy
        ball.y = ball.radius
      }
      if (ball.x - ball.radius < 0) {
        ball.dx = -ball.dx
        ball.x = ball.radius
      }
      if (ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx
        ball.x = canvas.width - ball.radius
      }

      // Paddle collision
      if (
        ball.y + ball.radius > paddle.y &&
        ball.y - ball.radius < paddle.y + paddle.height &&
        ball.x + ball.radius > paddle.x &&
        ball.x - ball.radius < paddle.x + paddle.width
      ) {
        ball.dy = -ball.dy
        ball.y = paddle.y - ball.radius
        const hitPoint = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2)
        ball.dx = hitPoint * ball.radius * 0.5
      }

      // Game over condition
      if (ball.y + ball.radius > canvas.height) {
        setGameState(GameState.GAME_OVER)
        onGameOver()
        return
      }

      // Pixel collision
      const hitPixels: Pixel[] = []
      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true
          hitPixels.push(pixel)
          ball.dy = -ball.dy
        }
      })

      // Check win condition
      const remainingPixels = pixelsRef.current.filter((pixel) => !pixel.hit)
      if (remainingPixels.length === 0) {
        setGameState(GameState.WON)
        onGameWon()
        return
      }
    }

    const drawGame = () => {
      ctx.fillStyle = BACKGROUND_COLOR
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw pixels
      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      // Draw paddle
      ctx.fillStyle = PADDLE_COLOR
      ctx.fillRect(paddleRef.current.x, paddleRef.current.y, paddleRef.current.width, paddleRef.current.height)

      // Draw ball
      ctx.fillStyle = BALL_COLOR
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      // Draw game state messages
      if (gameState === GameState.WAITING) {
        ctx.fillStyle = COLOR
        ctx.font = `${24 * scaleRef.current}px Arial`
        ctx.textAlign = 'center'
        ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height - 200 * scaleRef.current)
        
        // Add pulsing effect
        const alpha = 0.5 + 0.5 * Math.sin(Date.now() * 0.005)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height - 200 * scaleRef.current)
      }
    }

    const gameLoop = () => {
      updateGame()
      drawGame()
      animationFrameId.current = requestAnimationFrame(gameLoop)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("keydown", handleKeyPress)
    
    gameLoop()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("keydown", handleKeyPress)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [gameState, onGameWon, onGameOver]) // This effect runs when gameState changes

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
} 