"use client"
import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export default function MainText() {
  const [open, toggle] = useState(false)
  const { freq, factor, scale, opacity } = useSpring({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
      config: { duration: 3000 },
  })

  return (
    <div className="flex h-full" onClick={() => toggle(!open)}>
      <animated.svg className="w-[300px]" style={{ scale, opacity }} viewBox="0 0 1278 446">
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          {/* Custom Text */}
          <text
            x="50%"            // Center the text horizontally
            y="50%"            // Center the text vertically
            textAnchor="middle" // Align text to the center
            fontSize="100"      // Customize the font size
            fill="lightblue"    // Customize the text color
            dy=".3em"           // Offset for better centering
          >
            Hello
          </text>
        </g>
      </animated.svg>
    </div>
  )
}
