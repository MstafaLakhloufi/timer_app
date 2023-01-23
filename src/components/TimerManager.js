import React, {useState} from "react"
import Timer from "./Timer"


const TimerManager = () => {

    const [timerNames, setTimerNames] = useState([
        "Names",
        "Chicken",
        "Meditation"
    ])

    const [name, setName] = useState("")

    return(
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()

                const copyOfTimerNames = [...timerNames]
                copyOfTimerNames.push(name)
                setTimerNames(copyOfTimerNames)

                setName("")
            }}>
            <input value={name} onChange={(event) => {
                setName(event.target.value)
                }}/>
            <button>Add new Timer</button>
            </form>

            {timerNames.map(timerName => (
                <Timer name={timerName} />
            ))}
        </div>
    )
}

export default TimerManager