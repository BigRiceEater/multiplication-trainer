import React, { useState, useEffect } from "react";
import Question from "./Question";
import MultipleChoice from "./MultipleChoice";
import Clock from "./Clock";

import getNumber from "../util/getNumber.js";
import NextButton from "./NextButton";
import constants from "../util/constants";

import { useSelector } from "react-redux";

function Trainer() {
  const isTrainingSpecificMultiplier = useSelector(
    (state) => state.specificMultiplier.checked
  );

  const fixedOperand = useSelector((state) => state.specificMultiplier.value);
  const max = useSelector((state) => state.range.max);
  const min = useSelector((state) => state.range.min);

  const [operands, setOperands] = useState([0, 0]);
  const [userInteraction, setUserInteraction] = useState({
    answerClicked: false,
    userClickedButtonIndex: 0,
  });
  const numChoices = 4;
  const [choices, setChoices] = useState(Array(numChoices).fill(0));
  const [correctIndex, setCorrectIndex] = useState(0);

  useEffect(() => refresh(), []);

  const createValues = () => {
    return Array(numChoices)
      .fill(0)
      .map(() => generateValue());
  };

  const generateValue = () => {
    return (
      getNumber(constants.absoluteMinOperand, constants.absoluteMaxOperand) *
      getNumber(constants.absoluteMinOperand, constants.absoluteMaxOperand)
    );
  };

  const rerollRandomValueMatchingAnswer = (answer, choices) => {
    const exists = choices.findIndex((item) => item === answer);
    if (exists > -1) {
      do {
        var newChoiceValue = generateValue();
        choices[exists] = newChoiceValue;
      } while (newChoiceValue === answer);
    }
  };

  const refresh = () => {
    // if an operand is provided, this means we are training a specific timestable.
    const a = isTrainingSpecificMultiplier ? fixedOperand : getNumber(min, max);
    const b = getNumber(min, max);

    const choices = createValues();
    const answer = a * b;
    rerollRandomValueMatchingAnswer(answer, choices);
    const replaceChoiceIndex = getNumber(0, 3);
    choices[replaceChoiceIndex] = answer;

    setOperands([a, b]);
    setUserInteraction({ answerClicked: false, userClickedButtonIndex: 0 });
    setChoices(choices);
    setCorrectIndex(replaceChoiceIndex);
  };

  const handleChoice = (userClickedButtonIndex) => {
    setUserInteraction({ answerClicked: true, userClickedButtonIndex });
    //this.refresh();
  };

  const handleNextButtonClick = () => {
    refresh();
  };

  const { answerClicked, userClickedButtonIndex } = userInteraction;

  return (
    <React.Fragment>
      <Question operands={operands} />
      <MultipleChoice
        choices={choices}
        correctIndex={correctIndex}
        onClick={handleChoice}
        answerClicked={answerClicked}
        userClickedButtonIndex={userClickedButtonIndex}
        showCorrection={answerClicked}
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <NextButton show={answerClicked} onClick={handleNextButtonClick} />
          </div>
        </div>
      </div>
      <Clock />
    </React.Fragment>
  );
}

export default Trainer;
