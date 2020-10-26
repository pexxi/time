import React, {useState, useEffect} from "react";
import format from "date-fns/format";
import styles from './Home.module.css';

export default function Home() {

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(format(now, "HH:mm"));
      setCurrentDate(format(now, "EE dd.MM.yyyy"));
    }, 60000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.time}>{currentTime}</h1>
      <h2 className={styles.date}>{currentDate}</h2>
    </div>
  )
}
