import React, {useState, useEffect} from "react";


const Timer = ({name}) => {
    const [seconds, setSeconds] = useState('60')
    const [isCountdownRunning, setIsCountdownRunning] = useState(false)
    const [shouldAlert, setShouldAlert] = useState(false)
    console.log("Timer.render seconds", seconds)

    useEffect(() => {
        const secondsLeft = parseInt(seconds)
        if(isCountdownRunning && secondsLeft > 0){
            setTimeout(() => {
                setSeconds(secondsLeft - 1)
            }, 1000)
        } else  {
            if(shouldAlert){
                alert(`The Countdown is over for the Timer ${name}`)
                setShouldAlert(false)
            }
            setIsCountdownRunning(false)
           
        }
    }, [isCountdownRunning, seconds])

    return(
        <div className="Timer">
            This is {name} 
            <input 
                disabled={isCountdownRunning}
                type="number"
                value={seconds}
                onChange={(event) => {setSeconds(event.target.value)}} 
            />
            <button
                onClick={() => {
                    setIsCountdownRunning(true)
                    setShouldAlert(true)
                }}
            >
                Start Countdown
            </button>
        </div>
    )
}

export default Timer