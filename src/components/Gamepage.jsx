import React, { useState } from 'react'


const Gamepage = () => {
    const [selectedNo, setSelctedNo] = useState(null);
    const [diceNumber, setDiceNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const [diceLoading, setDiceLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [successFailureClass,  setSuccessFailureClass] = useState("")


    const diceNoArray = [1, 2, 3, 4, 5, 6];
    const selectNoClick = (event) => {
        setSelctedNo(event.target.value);
    }


    function diceClick() {
        setDiceLoading(true);
        if (selectedNo === null) {
            setError("You have not selected any number");
        }
        else {
            setTimeout(() => {
                setDiceLoading(false);

                let randomNumber = Math.floor((Math.random()) * 6 + 1);
                setDiceNumber(randomNumber);

                if (selectedNo == randomNumber) {
                    setScore((prev) => prev + 5)
                    setFailure(false);
                    setSuccess(true);
                    setSuccessFailureClass("success");
                }
                else {
                    setScore((prev) => prev - 1);
                    setSuccess(false);
                    setFailure(true);
                    setSuccessFailureClass("failure");
                }
                setSelctedNo(null);
                setError("");

            }, 500);
        }
    }


    function resetClicked() {
        setScore(0)
    }

    function showRulesClicked() {
        setShowRules((prev) => !prev);
    }


    return (
        <div className="gameContainer">
            {success && <div className="success">Congratulations! you got 5 points</div>}
            {failure && <div className="failure">Ohh! you lost 1 point</div>}
            <section className="section1">
                <div className="scoreDiv">
                    <h1>{score}</h1>
                    <p>Total Score </p>
                </div>
                <div className="selectDiv">
                    <p className="errorMessage">{error}</p>
                    <div className="NumberBtns">
                        {diceNoArray.map((valueNo, i) => {
                            return (
                                <button onClick={selectNoClick} key={i} value={valueNo}>{valueNo}</button>
                            )
                        })}

                    </div>
                    <h4>Select Number</h4>
                </div>
            </section>
            <section className="section2">
                <div className="diceDiv">
                    {diceLoading ? <img className='diceAnimate' onClick={diceClick} src={require(`../assets/dice_${diceNumber}.png`)} alt="dice with 1" /> : <img onClick={diceClick} src={require(`../assets/dice_${diceNumber}.png`)} alt="dice with 1" />
                    }
                    <p>Click on Dice to roll</p>
                </div>
                <div className="btnsDiv">
                    <button onClick={resetClicked} className="resetBtn">Reset Score</button>
                    <button onClick={showRulesClicked} className="showRulesBtn">{showRules ? "Hide Rules" : "Show Rules"}</button>
                </div>
            </section>
            {showRules && <section className="section3">
                <h4>How to play dice game</h4>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get 5 points</p>
                <p>if you get wrong guess then  1 point will be dedcuted</p>
            </section>
            }
        </div>
    )
}

export default Gamepage