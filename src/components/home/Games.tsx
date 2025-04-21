'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import ludodice from "@/assets/ludodice.svg"
import cricket from "@/assets/cricketcard.svg"
import cards from "@/assets/cards.svg"
import user from "@/assets/user.png"
import user2 from "@/assets/user2.png"
import user3 from "@/assets/user3.png"
import user4 from "@/assets/user4.png"
import user5 from "@/assets/user5.png"
import user6 from "@/assets/user6.png"
import snake from "@/assets/snakes.svg"
import horse from "@/assets/horse.svg"

interface Game {
  id: string
  title: string
  image: string
  player: {
    name: string
    avatar: string
  }
}

interface GameFilterProps {
  active: boolean
  children: React.ReactNode
}

export default function Games() {
  const [activeFilter, setActiveFilter] = useState('FAST GAMES')

  const games: Game[] = [
    {
      id: '1',
      title: 'FAST LUDO',
      image: `${ludodice}`,
      player: {
        name: 'Cameron Williamson',
        avatar: `${user}`
      }
    },
    {
      id: '2',
      title: 'QUICK CRICKET',
      image: `${cricket}`,
      player: {
        name: 'Dianne Russell',
        avatar: `${user2}`
      }
    },
    {
      id: '3',
      title: 'TEZZ CARDS',
      image: `${cards}`,
      player: {
        name: 'Jane Cooper',
        avatar: `${user3}`
      }
    },
    {
      id: '4',
      title: 'SNAKE & LADDER',
      image: `${snake}`,
      player: {
        name: 'Cody Fisher',
        avatar: `${user4}`
      }
    },
    {
      id: '5',
      title: 'CHESS',
      image: `${horse}`,
      player: {
        name: 'Wade Warren',
        avatar: `${user5}`
      }
    },
    {
      id: '6',
      title: 'CARROM',
      image: `${cards}`,
      player: {
        name: 'Robert Fox',
        avatar: `${user6}`
      }
    }
  ]

  const filters = ['FAST GAMES', 'LATEST GAMES', '3D GAMES', 'SPORT GAMES']

  return (
    <div className="w-full bg-gradient-to-bl from-black via-black to-purple-900/40 p-4 sm:p-6 md:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          WELCOME TO THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">TOP GAMES</span>
        </h2>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
          {filters.map((filter) => (
            <GameFilter
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </GameFilter>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20"
            >
              {/* Content */}
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-black">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white truncate">{game.title}</h3>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6 sm:h-7 sm:w-7 border border-purple-500">
                    <AvatarImage src={game.player.avatar} alt={game.player.name} />
                    <AvatarFallback>{game.player.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs sm:text-sm text-gray-300 truncate">{game.player.name}</span>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 text-white font-bold py-1 sm:py-2 text-xs sm:text-sm rounded-full 
                           hover:from-fuchsia-500 hover:to-cyan-300 transition-all duration-300"
                >
                  PLAY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GameFilter({ active, children, onClick }: GameFilterProps & { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300",
        "border border-transparent",
        active
          ? "bg-gradient-to-r from-fuchsia-600 to-cyan-400 text-white"
          : "bg-transparent border-purple-500/50 text-gray-300 hover:border-purple-500 hover:text-white"
      )}
    >
      {children}
    </button>
  )
}