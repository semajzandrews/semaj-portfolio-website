"use client"

import { useState } from "react"
import { BlockBreakerGame } from "../components/block-breaker-game"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function GameLanding() {
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing")
  const [resetKey, setResetKey] = useState(0)

  const handleGameWon = () => {
    setGameStatus("won")
  }

  const handleGameOver = () => {
    setGameStatus("lost")
  }

  const handleResetGame = () => {
    setGameStatus("playing")
    setResetKey((prev) => prev + 1)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Game Canvas (background) */}
      <BlockBreakerGame onGameWon={handleGameWon} onGameOver={handleGameOver} resetTrigger={resetKey} />

      {/* Instructions overlay for playing state */}
      {gameStatus === "playing" && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-black/80 text-white px-6 py-3 rounded-lg border border-white/20 backdrop-blur-sm">
            <p className="text-center text-sm md:text-base">
              🎮 Move your mouse to control the paddle • Break all blocks to enter the portfolio
            </p>
          </div>
        </div>
      )}

      {/* Skip button for playing state */}
      {gameStatus === "playing" && (
        <div className="absolute top-4 right-8 z-10">
          <Link href="/portfolio">
            <Button 
              variant="outline" 
              className="bg-black/80 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              Skip Game
            </Button>
          </Link>
        </div>
      )}

      {/* Game completion overlay */}
      {(gameStatus === "won" || gameStatus === "lost") && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
          <Card className="p-8 text-center bg-black/90 text-white shadow-lg max-w-md w-full border border-white/20 backdrop-blur-sm">
            <CardContent className="p-0">
              {gameStatus === "won" ? (
                <>
                  <h2 className="text-4xl font-bold mb-4">🎉 Excellent!</h2>
                  <p className="mb-6 text-lg">
                    You've broken through! Ready to explore my portfolio?
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
                  <p className="mb-6 text-lg">
                    No worries! You can still check out my portfolio or try again.
                  </p>
                </>
              )}
              <div className="flex flex-col space-y-4">
                <Link href="/portfolio">
                  <Button className="px-8 py-4 text-lg bg-white hover:bg-gray-200 text-black w-full">
                    🚀 Enter Portfolio
                  </Button>
                </Link>
                <Button
                  onClick={handleResetGame}
                  variant="outline"
                  className="px-8 py-4 text-lg bg-transparent border-white text-white hover:bg-white/20 w-full"
                >
                  🎮 Play Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 