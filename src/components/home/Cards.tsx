'use client'

import React, { useEffect, useState } from 'react'
import { Bot, CreditCard, Users2, Lock, LucideIcon } from 'lucide-react'
import ludo from '@/assets/ludo.svg'
import cricket from '@/assets/cricket.svg'
import rummy from '@/assets/rummy.svg'

interface Game {
  image: string;
}

interface FeatureProps {
  icon: LucideIcon;
  text: string;
}

export default function Cards(): React.ReactElement {
  const [_, setActiveIndex] = useState<number>(0)

  const games: Game[] = [
    { image: `${ludo}?height=300&width=300` },
    { image: `${cricket}?height=300&width=300` },
    { image: `${rummy}?height=300&width=300` },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % games.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [games.length])

  // const getCardStyle = (index: number): React.CSSProperties => {
  //   const position = (index - activeIndex + games.length) % games.length
  //   let transform = ''
  //   let opacity = 1
  //   let zIndex = 1

  //   if (position === 0) {
  //     transform = 'translateX(0) scale(1)'
  //     zIndex = 3
  //   } else if (position === 1) {
  //     transform = 'translateX(110%) scale(0.9)'
  //     opacity = 0.7
  //     zIndex = 2
  //   } else if (position === games.length - 1) {
  //     transform = 'translateX(-110%) scale(0.9)'
  //     opacity = 0.7
  //     zIndex = 2
  //   } else {
  //     opacity = 0
  //   }

  //   return { transform, opacity, zIndex }
  // }

  
  return (
    <div className='mt-12 pb-16 hidden md:flex flex-col'>
      {/* <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          <span className="block text-2xl md:text-3xl font-medium mb-2 text-gray-400">CHOOSE YOUR</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
            FAVORITE GAMES
          </span>
        </h1>
      </div>

      <div className="relative max-w-6xl mx-auto h-[400px] mb-20 overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          {games.map((game, index) => (
            <div
              key={index}
              className="absolute w-full max-w-sm transition-all duration-500 ease-in-out"
              style={getCardStyle(index)}
            >
              <div className="relative group mx-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-black rounded-xl overflow-hidden">
                  <img
                    src={game.image}
                    alt={`Game ${index + 1}`}
                    className="w-full h-[300px] object-cover"
                  />
                  {index === activeIndex && (
                    <Button 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 animate-none"
                    >
                      EASY WIN
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="flex justify-center gap-6 mb-20">
        <Button 
          className="relative px-8 py-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full font-bold text-white overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <span className="relative">VIEW ALL</span>
        </Button>
        <Button 
          className="relative px-8 py-6 bg-transparent border-2 border-purple-600 rounded-full font-bold text-purple-600 overflow-hidden group hover:text-white"
        >
          <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative">PLAY NOW</span>
        </Button>
      </div> */}

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <Feature icon={Bot} text="Bot Free" />
        <Feature icon={Lock} text="100% Secure" />
        <Feature icon={CreditCard} text="24 hour withdraw" />
        <Feature icon={Users2} text="24/7 Customer support" />
        {/* <Feature icon={Flag} text="Made in India" /> */}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-yellow-400">100%</span> cheating free game
        </h2>
        <p className="text-gray-400">We reached here with our hard work and dedication</p>
      </div>
    </div>
  )
}

function Feature({ icon: Icon, text }: Readonly<FeatureProps>): React.ReactElement {
  return (
    <div className="flex flex-col items-center text-center group z-10">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-0 group-hover:opacity-75 transition duration-300"></div>
        <Icon className="w-8 h-8 text-yellow-400 relative" />
      </div>
      <p className="font-semibold">{text}</p>
    </div>
  )
}