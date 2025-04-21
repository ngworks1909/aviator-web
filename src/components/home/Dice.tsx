import { useState } from "react";
import { Button } from "../ui/button";
import dice from '@/assets/dice.svg'

export default function Dice() {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="relative w-full">
      {/* Light effect for the previous block */}
      <div className="absolute -top-96 left-40 h-[600px] w-full sm:w-[900px] -translate-x-1/2 transform rounded-full bg-purple-600/20 blur-[100px]" />
      
      
      <div className="container mx-auto px-4 py-16">
        {/* Gaming Card Section */}
        <div className="mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-8 p-8 lg:flex-row md:p-12">
            {/* Left side - Gaming Image */}
            <div className="w-full md:w-1/2">
              <input type="image"
                src={`${dice}`}
                alt="Ace card and dice"
                className="transform transition-transform hover:scale-105 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]"
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                DISCOVER THE{' '}
                <span className="text-blue-600">SKILL</span>{' '}
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                  BASED
                </span>{' '}
                GAMING
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant
                colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.
              </p>
              <Button 
        className="relative px-4 py-6 bg-transparent border-2 border-purple-600 font-bold text-purple-600 overflow-hidden group hover:text-white transition-colors duration-300"
        style={{
          transform: 'skew(-20deg)',
          width: '200px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute inset-0 bg-purple-600 transition-transform duration-300 ease-out origin-bottom"
          style={{
            transform: `scaleY(${isHovered ? 1 : 0})`,
          }}
        ></div>
        <span className="relative z-10 inline-block" style={{ transform: 'skew(20deg)' }}>
          PLAY NOW
        </span>
      </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}