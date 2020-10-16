import React, { useEffect, useState } from "react"

const PianoKey = ({ black, note, tone, ac, id, keyCode }) => {
  const playOnKey = useKeyPress(keyCode)
  function playSound() {
    ac.playNote(`${note}${id + parseInt(tone)}`)
  }

  function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false)

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false)
      }
    }

    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler)
      window.addEventListener("keyup", upHandler)
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler)
        window.removeEventListener("keyup", upHandler)
      }
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return keyPressed
  }

  if (playOnKey) playSound()

  return black ? (
    <div onClick={playSound} className="black-keys-div ">
      <div className={`black-key ${playOnKey ? "black-key-active" : ""}`}>
        {note}
      </div>
    </div>
  ) : (
    <div
      onClick={playSound}
      className={`white-key ${playOnKey ? "white-key-active" : ""}`}
    >
      {note}
    </div>
  )
}

export default PianoKey
