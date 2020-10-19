import React, {useState, useEffect} from "react";

export default function Home() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <h1>{currentTime?.toISOString()}</h1>
    </div>
  )
}
