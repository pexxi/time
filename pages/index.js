import React, {useState, useEffect} from "react";
import format from "date-fns/format";

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
    <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", backgroundColor: "black", color: "white"}}>
      <h1 style={{ fontSize: "calc(100vh * 0.4)", margin: "0 auto" }}>{format(currentTime, "HH:mm:ss")}</h1>
      <h2 style={{ margin: "0 auto" }}>{format(currentTime, "EE dd.MM.yyyy")}</h2>
    </div>
  )
}
