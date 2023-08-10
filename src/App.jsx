import { useEffect, useRef } from 'react'
import './App.css'

export default function App() {
  const hoursRef = useRef(null)
  const minutesRef = useRef(null)
  const secondsRef = useRef(null)
  const periodRef = useRef(null)
  const periodTextRef = useRef(null)
  const dateRef = useRef(null)
  const monthRef = useRef(null)
  const yearRef = useRef(null)
  
  {/* Adicionar valor */}
  const addValue = (value) => value < 10 ? "0" + value : value

  {/* Obtendo horário atual do sistema */}
  const getTime = () => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    hoursRef.current.textContent = addValue(hours)
    minutesRef.current.textContent = addValue(minutes)
    secondsRef.current.textContent = addValue(seconds)
    if(hours < 12) {
      periodRef.current.textContent = "AM"
      periodRef.current.style.color = "#ffd859"
      periodTextRef.current.textContent = "Ante meridiem"
    }
    else {
      periodRef.current.textContent = "PM"
      periodRef.current.style.color = "#39f2ff"
      periodTextRef.current.textContent = "Post meridiem"
    }
  }
  useEffect(() => {
    setInterval(getTime, 1000)
    getTime()
  }, [])

  {/* Obtendo data atual do sistema */}
  const getDate = () => {
    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    dateRef.current.textContent = addValue(date) + " /"
    monthRef.current.textContent = addValue(month + 1) + " /"
    yearRef.current.textContent = year
  }
  useEffect(() => {
    getDate()
  }, [])

  return (
    <>
        <main className='container'>
          <header className="title-box">
            <h1>Digital Clock</h1>
          </header>{/* End title box */}
          <section className="time-box">
            <div className="time">
              <h2 ref={hoursRef}></h2>
              <small>Hours</small>
            </div>{/* End time */}
            <div className="time">
              <h2 ref={minutesRef}></h2>
              <small>Minutes</small>
            </div>{/* End time */}
            <div className="time">
              <h2 ref={secondsRef}></h2>
              <small>Seconds</small>
            </div>{/* End time */}
            <div className="time">
              <h2 ref={periodRef}></h2>
              <small ref={periodTextRef}></small>
            </div>{/* End time */}
          </section>{/* End time box */}
          <footer className='date-box'>
              <p ref={dateRef}></p>
              <p ref={monthRef}></p>
              <p ref={yearRef}></p>
          </footer>{/* End date box */}
        </main>{/* End container */}
    </>
  )
}