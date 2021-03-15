import React, { useState } from 'react'
import Countdown from "react-countdown";

const Index = () => {
  const [count, setCount] = useState<number>(Date.now() + 5000)

  const resetCount = () => {
    setCount(Date.now() + 5000)
  }

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return () => setCount(Date.now() + 5000)
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>
    }
  }

  return (
    <Countdown
      date={count}
      onComplete={resetCount}
      overtime={true}
      renderer={renderer}
    />
  )
};

export default Index;
