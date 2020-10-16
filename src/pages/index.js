import React, { useState } from "react"
import PianoKey from "../components/PianoKey"
import AudioPlayer from "../functions/AudioPlayer"

export default function Home(props) {
  const [size, setSize] = useState(1)
  const [tone, setTone] = useState(3)

  const audioPlayer = AudioPlayer()
  audioPlayer.setInstrument("acoustic_grand_piano")

  const keyCodes = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
    "i",
    "k",
  ]

  function generateKeyboard() {
    let keys = []
    const setOfKeys = id => {
      return [
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "a" : ""}
          id={id}
          note={"C"}
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "w" : ""}
          id={id}
          note={"C#"}
          black
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "s" : ""}
          id={id}
          note={"D"}
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "e" : ""}
          id={id}
          note={"D#"}
          black
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "d" : ""}
          id={id}
          note={"E"}
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "f" : ""}
          id={id}
          note={"F"}
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "t" : ""}
          id={id}
          note={"F#"}
          black
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "g" : ""}
          id={id}
          note={"G"}
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "y" : ""}
          id={id}
          note={"G#"}
          black
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "h" : ""}
          id={id}
          note={"A"}
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "u" : ""}
          id={id}
          note={"A#"}
          black
        />,
        <PianoKey
          ac={audioPlayer}
          tone={tone}
          keyCode={id == 1 ? "j" : ""}
          id={id}
          note={"B"}
        />,
      ]
    }
    for (let i = 0; i < size; i++) {
      keys.push(setOfKeys(i + 1))
    }

    return keys
  }

  function keydownHandler(e) {
    // if (e.key === "a") audioPlayer.playNote(`${note}${id + parseInt(tone)}`)
  }

  document.addEventListener("keydown", keydownHandler)

  return (
    <div className="wrapper">
      <div className="options">
        <div>
          <span className="label">Size</span>
          <select
            onChange={e => {
              setSize(e.target.value)
            }}
            name="size"
            id="size"
            value={size}
          >
            <option value={1}>12</option>
            <option value={2}>24</option>
            <option value={3}>36</option>
          </select>
        </div>
        <div>
          <span className="label">Tone</span>
          <select
            onChange={e => {
              setTone(e.target.value)
            }}
            name="size"
            id="size"
            value={tone}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
      </div>
      <div className="keys-div">{generateKeyboard()}</div>
    </div>
  )
}
