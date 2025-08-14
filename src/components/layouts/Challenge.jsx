import { useState, useEffect } from "react"
import ProgressBar from "../ProgressBar"
import { isEncountered, shuffle } from "../../utils"
import DEFINITIONS from '../../utils/VOCAB.json'

export default function Challenge(props) {
    const { day, dayWords, handleChangePage, handleIncrementAttempts, handleCompleteDay, PLAN } = props

    // ✅ initialize list safely
    const initialList = dayWords && dayWords.length > 0 
        ? [...dayWords, ...shuffle(dayWords), ...shuffle(dayWords), ...shuffle(dayWords)]
        : []

    const [listToLearn, setListToLearn] = useState(initialList)
    const [wordIndex, setWordIndex] = useState(0)
    const [inputVal, setInputVal] = useState('')
    const [showDefinition, setShowDefinition] = useState(false)

    // ✅ safe word & definition
    const word = listToLearn[wordIndex] || ''
    const definition = DEFINITIONS[word] || ''
    const isNewWord = showDefinition || (!isEncountered(day, word) && wordIndex < dayWords.length)

    function giveUp() {
        if (!word) return
        setListToLearn([...listToLearn, word])
        setShowDefinition(true)
    }

    // ✅ handle next word safely
    function handleNextWord(isCorrect) {
        handleIncrementAttempts()
        if (isCorrect) {
            if (wordIndex >= listToLearn.length - 1) {
                handleCompleteDay()
                return
            }
            setWordIndex(wordIndex + 1)
            setShowDefinition(false)
            setInputVal('')
        }
    }

    return (
        <section id="challenge">
            <h1>{word || 'No words available'}</h1>
            {word && isNewWord && <p>{definition}</p>}

            <div className="helper">
                <div>
                    {[...Array(definition.length).keys()].map((char, idx) => {
                        const styleToApply = inputVal.length < char + 1
                            ? ''
                            : inputVal[idx]?.toLowerCase() === definition[idx]?.toLowerCase()
                                ? 'correct'
                                : 'incorrect'

                        return <div className={styleToApply} key={idx}></div>
                    })}
                </div>

                <input
                    value={inputVal}
                    onChange={(e) => {
                        const val = e.target.value
                        setInputVal(val)
                        if (val.length === definition.length) {
                            handleNextWord(val.toLowerCase() === definition.toLowerCase())
                        }
                    }}
                    type="text"
                    placeholder="Enter the definition..."
                />
            </div>

            <div className="challenge-btns">
                <button onClick={() => handleChangePage(1)} className="card-button-secondary">
                    <h6>Quit</h6>
                </button>
                <button onClick={giveUp} className="card-button-primary">
                    <h6>I forgot</h6>
                </button>
            </div>

            <ProgressBar
                remainder={listToLearn.length ? (wordIndex * 100) / listToLearn.length : 0}
                text={`${wordIndex} / ${listToLearn.length}`}
            />
        </section>
    )
}
