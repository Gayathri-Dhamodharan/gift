import React from 'react'
import  {useMemo} from "react";


const heartRain = () => {
    const hearts = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,          // random horizontal position
      size: Math.random() * 20 + 15,      // random size
      duration: Math.random() * 5 + 5,    // random speed
      delay: Math.random() * 5,           // random delay
    }));
  }, []);
  return (
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
           💗 
        </span>
      ))}
    </div>
  )
}

export default heartRain